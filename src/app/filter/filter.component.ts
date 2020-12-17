import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonService } from '../hero.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  private filterList: any[] = [];
  @Output() cardData: EventEmitter<any> = new EventEmitter();
  constructor(private commonService: CommonService) { }

  ngOnInit() { 
    this.getFilters(); 
  }

  getFilters(paraName?, val?): void {
    // if need to show the allied filter on use filterList
    paraName? this.filterList.push({paraName: val}) : null;
    
    this.commonService.getCards(paraName, val).subscribe((data) => {
        this.cardData.emit(data);
    });
  }

}
