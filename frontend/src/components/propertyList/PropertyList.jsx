import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {

    const { data, loading, error } = useFetch(
        "/hotels/countByType"
    );
    const images = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "/apartment.jpg",
        "/resort.jpg",
        "/villa.jpg",
        "/cabin.jpg"
    ]
    return (
        <div className="pList">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img src={img} alt="" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>
                                        {data[i]?.count} {data[i]?.type}
                                    </h2>
                                </div>
                            </div>
                        ))
                    }
                </>
            )}
        </div>
    );
};

export default PropertyList;