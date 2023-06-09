import { useGetRecentProductsQuery } from '../store';

function Featured() {
    const { data } = useGetRecentProductsQuery();

    console.log(data);

    return <div>Featured</div>;
}

export default Featured;
