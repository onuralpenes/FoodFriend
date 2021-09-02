import { Pipe, PipeTransform } from '@angular/core';
import { Expert, experts } from '../main-page/layout/experts/data';
const { isArray } = Array;

@Pipe({
    name: 'expertfilter'
})
export class ExpertFilterPipe implements PipeTransform {
    post: Expert[] = experts;
    
    transform(post: Expert[], find: string): Expert[] {
        if (!post) return [];
        if (!find) return post;
        find = find.toLowerCase();
        return search(post, find);
    }
}

function search(entries: any[], search: string) {

    search = search.toLowerCase();

    return entries.filter(function (obj) {
        const keys: string[] = Object.keys(obj);
        return keys.some(function (key) {
            const value = obj[key];
            if (isArray(value)) {
                return value.some(v => {
                    return v.toLowerCase().includes(search);
                });
            }
            else if (!isArray(value)) {
                return value.toLowerCase().includes(search);
            }
        })
    });
}