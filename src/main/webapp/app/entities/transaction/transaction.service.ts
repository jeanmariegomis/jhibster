import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ITransaction } from 'app/shared/model/transaction.model';

type EntityResponseType = HttpResponse<ITransaction>;
type EntityArrayResponseType = HttpResponse<ITransaction[]>;

@Injectable({ providedIn: 'root' })
export class TransactionService {
  public resourceUrl = SERVER_API_URL + 'api/transactions';

  constructor(protected http: HttpClient) {}

  create(transaction: ITransaction): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(transaction);
    return this.http
      .post<ITransaction>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(transaction: ITransaction): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(transaction);
    return this.http
      .put<ITransaction>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ITransaction>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ITransaction[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(transaction: ITransaction): ITransaction {
    const copy: ITransaction = Object.assign({}, transaction, {
      date: transaction.date != null && transaction.date.isValid() ? transaction.date.format(DATE_FORMAT) : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.date = res.body.date != null ? moment(res.body.date) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((transaction: ITransaction) => {
        transaction.date = transaction.date != null ? moment(transaction.date) : null;
      });
    }
    return res;
  }
}
