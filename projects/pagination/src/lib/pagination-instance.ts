
export interface PaginationInstance{
  // optional id if you wish to have multiple instances on a single component
  id?: string;
  // to customize the number of items to be displayed each time
  itemsPerPage: number;

  currentPage: number;
// the total number items in the colleaction
// only useful when doing serverside rendering, where
// the collection size is limited to a single page
// retured  by the server api

// For in_memory paging, this property should not be set,
// as it will automatically set to the collection.length property
  totalItems?: number;
}
