import { useArray } from './useArray';

function useList() {
  const [list, listAPI] = useArray();

  const addItem = (item) => listAPI.add(item);

  const updateList = (updatedItem) =>
    listAPI.update((item) => (item.id === updatedItem.id ? updatedItem : item));

  const filterList = (id) => listAPI.filter((item) => item.id !== id);

  return {
    list,
    addItem,
    updateList,
    filterList,
  };
}

export { useList };
