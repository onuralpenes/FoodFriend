import { Component, OnInit } from '@angular/core';
import { ExpertProfileComponent } from './expert-profile/expert-profile.component';
@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {
  searchText = "Ayıboğan";
  filterExperts:[
    {
      name: string,
      job: string;
      information: string;
    }
  ] = [{"name":"",
        "job":"",
      "information":""}]
  experts = [
   {
      "name":"Aysel Ayıboğan",
      "job":"Diyetisyen",
      "information":`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`
    }, {
      "name":"Aysel Daizygörl",
      "job":"Diyetisyen",
      "information":`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`
    },{
      "name":"Aysel Karetekid",
      "job":"Diyetisyen",
      "information":`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`
    },{
      "name":"Aysel Karetekid",
      "job":"Diyetisyen",
      "information":`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`
    },{
      "name":"Aysel Karetekid",
      "job":"Diyetisyen",
      "information":`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`
    }
  ]
  constructor() { 
    this.filterExperts.pop();
  }

  ngOnInit(): void {
  }

  text: string = "";
  onSubmit(text){
    this.text = text;
    this.filter(text);
  }
  filter(filterValue:string){
    console.log(event)
    //const filterValue = (event?.target as HTMLInputElement).value;

        this.experts.filter((obj)=>{
          if(obj.name.includes(filterValue)){
            this.filterExperts.push(obj)
          }else{
            for (let i = 0; i < this.filterExperts.length; i++) {
              let foundenIndex;
              if(this.filterExperts[i].name != filterValue){
                foundenIndex=i;
                delete this.filterExperts[i];
              }
              
            }
          }
        })
        //this.filterExperts.push(this.experts[i]);
        //delete this.experts[i]
      
  }
}
