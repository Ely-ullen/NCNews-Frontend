// const AvailableItems = () => {
//     const [itemsData, setItemsData] = useState([]);
//     const [filteredState, setFilteredState] = useState("");

//     useEffect(() => {
//       fetchMarketData().then(({ items }) => {
//         setItemsData(items);
//       });
//     }, [filteredState]);

//     const handleClick = () => {
//       setFilteredState("Electronics");
//     };

//     const filteredItems = itemsData.filter((item) => {
//       if (item.category_name === filteredState || filteredState === "") {
//         return true;
//       }
//     });

//     return (
//       <>
//         <button onClick={handleClick}>Change category to Electronics</button>
