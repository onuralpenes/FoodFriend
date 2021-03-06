import { Pipe, PipeTransform } from '@angular/core';
import { PersonalEnergyActivity } from '../models/data/energy-activity.model';
const { isArray } = Array;

@Pipe({
    name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {

    transform(post: PersonalEnergyActivity[], find: string): PersonalEnergyActivity[] {
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
                    return v.toString().toLowerCase().includes(search);
                });
            }
            else if (!isArray(value)) {

                return value.toString().toLowerCase().includes(search);
            }
        })
    });
}