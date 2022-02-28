import { makeAutoObservable } from 'mobx';

import { PostProps } from '../../data/posts';
import service from './searchStore.service';

class SearchStore {
  error = '';

  search = '';

  data: Array<PostProps> = [];

  filtredPosts: Array<PostProps> = [];

  posts: Array<PostProps> = [];

  isLoading = false;

  isSearching = false;

  constructor() {
    makeAutoObservable(this);
  }

  getData = async () => {
    try {
      this.isLoading = true;
      service
        .getSomeData()
        .then((data) => (this.data = data))
        .then(() => (this.posts = this.data.slice(0, 3)))
        .then(() => (this.filtredPosts = this.posts));
    } finally {
      this.isLoading = false;
    }
  };

  setFilter(searchQuery = ''): void {
    this.search = searchQuery;
    if (searchQuery.length > 2) {
      this.filtredPosts = this.posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      this.filtredPosts = this.posts;
    }
  }

  setError = (error: string) => {
    this.error = error;
  };

  setSearch = (search: string) => {
    this.search = search;
  };

  setSearching = (flag: boolean) => {
    this.isSearching = flag;
  };

  setPosts = () => {
    this.posts = this.data.slice(0, this.posts.length + 3);
    this.setFilter();
  };
}

export default new SearchStore();
