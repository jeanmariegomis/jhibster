import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { ITransaction, Transaction } from 'app/shared/model/transaction.model';
import { TransactionService } from './transaction.service';
import { IClient } from 'app/shared/model/client.model';
import { ClientService } from 'app/entities/client/client.service';
import { IUser } from 'app/core/user/user.model';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'jhi-transaction-update',
  templateUrl: './transaction-update.component.html'
})
export class TransactionUpdateComponent implements OnInit {
  isSaving: boolean;

  clients: IClient[];

  users: IUser[];
  dateDp: any;

  editForm = this.fb.group({
    id: [],
    date: [],
    frais: [],
    comEnvoi: [],
    comRetrait: [],
    comSysteme: [],
    comEtat: [],
    clientEnvoi: [],
    clientretrait: [],
    userEnvoi: [],
    userRetrait: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected transactionService: TransactionService,
    protected clientService: ClientService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ transaction }) => {
      this.updateForm(transaction);
    });
    this.clientService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IClient[]>) => mayBeOk.ok),
        map((response: HttpResponse<IClient[]>) => response.body)
      )
      .subscribe((res: IClient[]) => (this.clients = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(transaction: ITransaction) {
    this.editForm.patchValue({
      id: transaction.id,
      date: transaction.date,
      frais: transaction.frais,
      comEnvoi: transaction.comEnvoi,
      comRetrait: transaction.comRetrait,
      comSysteme: transaction.comSysteme,
      comEtat: transaction.comEtat,
      clientEnvoi: transaction.clientEnvoi,
      clientretrait: transaction.clientretrait,
      userEnvoi: transaction.userEnvoi,
      userRetrait: transaction.userRetrait
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const transaction = this.createFromForm();
    if (transaction.id !== undefined) {
      this.subscribeToSaveResponse(this.transactionService.update(transaction));
    } else {
      this.subscribeToSaveResponse(this.transactionService.create(transaction));
    }
  }

  private createFromForm(): ITransaction {
    return {
      ...new Transaction(),
      id: this.editForm.get(['id']).value,
      date: this.editForm.get(['date']).value,
      frais: this.editForm.get(['frais']).value,
      comEnvoi: this.editForm.get(['comEnvoi']).value,
      comRetrait: this.editForm.get(['comRetrait']).value,
      comSysteme: this.editForm.get(['comSysteme']).value,
      comEtat: this.editForm.get(['comEtat']).value,
      clientEnvoi: this.editForm.get(['clientEnvoi']).value,
      clientretrait: this.editForm.get(['clientretrait']).value,
      userEnvoi: this.editForm.get(['userEnvoi']).value,
      userRetrait: this.editForm.get(['userRetrait']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITransaction>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackClientById(index: number, item: IClient) {
    return item.id;
  }

  trackUserById(index: number, item: IUser) {
    return item.id;
  }
}
