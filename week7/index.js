const fetchData = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Request-Headers", "*");
  myHeaders.append("api-key", "i3Ew8MrOnCjfio1jHTpLimqn4TXNwR7rAFBu6kC2dUk8vhAIK8x4YTqXiTfKhsPv");

  /* example airbnb */
  const raw = JSON.stringify({
    "collection": "listingsAndReviews",
    "database": "sample_airbnb",
    "dataSource": "Cluster0",
    "filter": {
      "property_type": "Apartment"
    },
    "projection": {
      "listing_url": 1,
      "name": 1,
      "summary": 1,
      "property_type": 1,
      "cancellation_policy": 1
    }
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://us-west-2.aws.data.mongodb-api.com/app/data-qwnde/endpoint/data/v1/action/findOne", requestOptions);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log('error', error);
  }
};

fetchData();


