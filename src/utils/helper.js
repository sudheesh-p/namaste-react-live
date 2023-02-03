export function filterData(searchText, restaurants) {
      const filterData = restaurants.filter((item) =>
        item?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
  }