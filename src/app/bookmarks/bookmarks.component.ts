import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  animations: [
    trigger('bookmarkTileAnim', [
      transition(':leave', [
        animate(500, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class BookmarksComponent implements OnInit {

  bookmarks: Bookmark[]

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks()
  }

  onDeleteClick(bookmark: Bookmark) {
    this.bookmarkService.deleteBookmark(bookmark.id)
  }

}
