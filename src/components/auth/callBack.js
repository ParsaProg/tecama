
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Callback = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const query = new URLSearchParams(location.search);
      const code = query.get('code'); // گرفتن کد تایید از URL

      if (code) {
        try {
          // ارسال درخواست برای گرفتن توکن دسترسی با استفاده از کد تایید
          const tokenResponse = await axios.post(
            'https://github.com/login/oauth/access_token',
            {
              client_id: 'Ov23lizZUSthhqzRmR3G',
              client_secret: 'a672170cab973303f9a9801d413160604ae0c9ab',
              code: code,
            },
            {
              headers: {
                'Accept': 'application/json',
              },
            }
          );

          const accessToken = tokenResponse.data.access_token;

          // استفاده از توکن دسترسی برای گرفتن اطلاعات کاربر
          const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          // ذخیره‌سازی اطلاعات کاربر در state
          setUser(userResponse.data);
          console.log(userResponse.data)
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchData();
  }, [location.search]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.login}</h2>
      <p>Email: {user.email || 'Email not provided'}</p>
      <img src={user.avatar_url} alt="Avatar" />
    </div>
  );
};

export default Callback;
