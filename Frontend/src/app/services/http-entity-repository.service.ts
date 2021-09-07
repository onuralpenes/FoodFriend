import { Injectable, Type } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
//import { IPagingFilter } from 'src/app/models/core/paging-filter';

@Injectable()
export class HttpEntityRepositoryService<T> {
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            //Authorization: "Bearer " + localStorage.getItem(environment.TOKEN_KEY)
        })
    };

    constructor(
        private http: HttpClient) { }

    /// /api/[controller] - GET
    getAll(_url: string): Observable<T> {
        return this.http.get<T>(
            environment.BASE_URL + "/api/" + _url,
            this.httpOptions
        );
    }

    // getListForPaging(_url: string, _pagingFilter: IPagingFilter): Observable<T> {
    //     var p = this.getHttpParam(_pagingFilter);
    //     return this.http.get<T>(environment.BASE_URL + "/api/" + _url, {
    //         headers: this.httpOptions.headers,
    //         params: p
    //     });
    // }

    getListForFilter(_url: string, _pagingFilter: any): Observable<T> {
        var p = this.getHttpParam(_pagingFilter);
        return this.http.get<T>(environment.BASE_URL + "/api/" + _url, {
            headers: this.httpOptions.headers,
            params: p
        });
    }

    /// /api/[controller]/:id - GET
    get(_url: string, id: number): Observable<T> {
        return this.http.get<T>(
            environment.BASE_URL + "/api/" + _url + "/" + id,
            this.httpOptions
        );
    }

    /// /api/[controller] - POST
    insert(_url: string, _content: any): Observable<T> {
        return this.http.post<T>(
            environment.BASE_URL + "/api/" + _url,
            _content,
            this.httpOptions
        );
    }

    // /api/[controller] - PUT
    update(_url: string, _content: any): Observable<T> {
        return this.http.put<T>(
            environment.BASE_URL + "/api/" + _url + "/"+
            _content,
            this.httpOptions
        );
    }

    /// /api/[controller]/:id - DELETE
    delete(_url: string, id: number): Observable<T> {
        return this.http.delete<T>(
            environment.BASE_URL + "/api/" + _url + "/" + id,
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
