export const filterData = (searchtext, listdata) => {
    const newdata = listdata.filter((res) =>
      res.data.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    return newdata;
  };
  