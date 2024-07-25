import axios from "axios";

const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      client_id: "1qiLsK-DH46PiXJMzlZvqiSCoDbzlNxNlKiNMiujA6c",
    },
  });
  return response.data;
};

export default fetchImages;
