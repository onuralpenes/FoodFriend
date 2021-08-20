//Where to get the nutritional data from the nutrient table.

export interface Blood {
    value: string;
    viewValue: string;
  }

export const BLOOD_DATA: Blood[] = [
    { value: 'arp', viewValue: 'A Rh+' },
    { value: 'arn', viewValue: 'A Rh-' },
    { value: 'brp', viewValue: 'B Rh+' },
    { value: 'brn', viewValue: 'B Rh-' },
    { value: 'abrp', viewValue: 'AB Rh+' },
    { value: 'abrn', viewValue: 'AB Rh-' },
    { value: '0rp', viewValue: '0 Rh+' },
    { value: '0rn', viewValue: '0 Rh-' },
  ]

  export interface Select {
    value: string;
    viewValue: string;
  }

  export const SELECT_DATA: Select[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '0', viewValue: 'No' },
  ]