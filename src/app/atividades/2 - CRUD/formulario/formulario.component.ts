import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Pessoa } from 'src/app/models';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Pessoa,
    private matDialog: MatDialogRef<FormularioComponent>,
    private http: HttpClient
  ) { }

  form = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    senha: new FormControl('', [
      Validators.required
    ]),
    cep: new FormControl('', [
      Validators.required,
      Validators.minLength(9)
    ]),
    logradouro: new FormControl({
      value: '', disabled: true
    }, [
      Validators.required
    ]),
  })

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
      if (this.data.logradouro.length > 0) {
        this.form.get('logradouro')?.enable();
      }
    }

    this.form.get('cep')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((cep: string) => {
      if(cep.length == 9) {
        const cepFormated = cep.replace(/-/g, '');
        this.buscarCep(cepFormated);
      }
    })
  }

  buscarCep(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json`;

    this.http.get(url).subscribe({
      next: (response: any) => {
        if (response && !response?.erro) {
          this.form.get('logradouro')?.setValue(response?.logradouro);
        } else {
          alert("O CEP informado é inválido.")
        }
      },
      error: () => {
        this.form.get('logradouro')?.setValue('');
        alert("Não foi possível realizar a consulta do CEP.")
      }
    });
  }

  submitForm() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      const pessoa = this.form.value;
      this.matDialog.close(pessoa);
    } else {
      alert('O formulário contém erros ou campos vazios. Verifique e preencha corretamente.');
    }
  }

  formatCep(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d{1,3})/, '$1-$2');
    }
    this.form.get('cep')?.setValue(value);
  }
}
