import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

bookmarks: Bookmark[] = [
  new Bookmark('Youtube', 'https://youtube.com'),
  new Bookmark('Türkanime', 'https://turkanime.net'),
  new Bookmark('Google', 'https://google.com')
]

  constructor() { }

  getBookmarks() {
    return this.bookmarks
  }

  getBookmark(id: string) {
    return this.bookmarks.find(b => b.id ===id )
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark)
    this.saveState()
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id)
    Object.assign(bookmark, updatedFields)
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if (bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex, 1)
    this.saveState()
  }

  saveState() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
  }
}
