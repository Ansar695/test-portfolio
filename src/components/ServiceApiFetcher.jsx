import axios from 'axios';

const serviceDataFetcher = async () => {
  const res = await axios.get("http://localhost:3000/api/my-service");
  return res.data;
};

const ServiceApiFetcher = async () => {
  const serviceApiData = await serviceDataFetcher();

  return (
    <>
      <div>{serviceApiData}</div>
    </>
  );
};

export default ServiceApiFetcher;
