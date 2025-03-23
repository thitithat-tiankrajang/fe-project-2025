export default async function getUserProfile(token: string) {
    const response = await fetch(
      "http://campway-api-ver-001.us-east-1.elasticbeanstalk.com/api/v1/bookings",
      {
        method: "GET",
        mode: "cors",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error("Cannot get all bookings");
    }
  
    return await response.json();
  }
  