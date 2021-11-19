import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
//import { IPagingFilter } from 'src/app/models/core/paging-filter';

@Injectable()
export class HttpEntityRepositoryService<T> {
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            Authorization: "Bearer " + localStorage.getItem(environment.TOKEN_KEY)
        })
    };

    constructor(private http: HttpClient) { }

    getAll(_url: string): Observable<T> {
        return this.http.get<T>(
            environment.BASE_URL + _url,
            this.httpOptions
        );
    }

    // getListForPaging(_url: string, _pagingFilter: IPagingFilter): Observable<T> {
    //     var p = this.getHttpParam(_pagingFilter);
    //     return this.http.get<T>(environment.BASE_URL + _url, {
    //         headers: this.httpOptions.headers,
    //         params: p
    //     });
    // }

    getListForFilter(_url: string, _pagingFilter: any): Observable<T> {
        var p = this.getHttpParam(_pagingFilter);
        return this.http.get<T>(environment.BASE_URL + _url, {
            headers: this.httpOptions.headers,
            params: p
        });
    }

    get(_url: string, id: number): Observable<T> {
        let url: string = environment.BASE_URL + _url + id.toString();
        return this.http.get<T>(url, this.httpOptions);
    }

    insert(_url: string, _content: any): Observable<T> {
        return this.http.post<T>(
            environment.BASE_URL + _url,
            _content,
            this.httpOptions
        );
    }

    update(_url: string, _content: any): Observable<T> {
        return this.http.post<T>(
            environment.BASE_URL + _url,
            _content,
            this.httpOptions
        );
    }

    delete(_url: string, id: number): Observable<T> {
        return this.http.delete<T>(
            environment.BASE_URL + _url + id,
            this.httpOptions
        );
    }

    private getHttpParam(_pagingFilter: any) {
        var httpParams = new HttpParams();
        Object.keys(_pagingFilter)
            .filter(key => {
                let v = _pagingFilter[key];
                return Array.isArray(v) || typeof v === "string"
                    ? v.length > 0
                    : v !== null && v !== undefined;
            })
            .forEach(key => {
                httpParams = httpParams.set(key, _pagingFilter[key]);
            });
        return httpParams;
    }
}
