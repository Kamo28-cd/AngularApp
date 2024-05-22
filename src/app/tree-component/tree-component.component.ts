import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TYPE_DATA } from '../data/tree-data';
import { NestedDataProps } from '../interfaces/interfaces';

@Component({
  selector: 'app-tree-component',
  standalone: true,
  imports: [MatTreeModule, MatIconModule, CommonModule],
  templateUrl: './tree-component.component.html',
  styleUrl: './tree-component.component.css',
})
export class TreeComponentComponent {
  nestedTreeControl = new NestedTreeControl<NestedDataProps>(
    (node) => node.children
  );
  nestedDataSource = new MatTreeNestedDataSource<NestedDataProps>();
  constructor() {
    this.nestedDataSource.data = TYPE_DATA;
  }
  hasNestedChild = (index: number, node: NestedDataProps) => {
    return !!node.children && node.children.length > 0;
  };

  ngOnInit(): void {}
}
