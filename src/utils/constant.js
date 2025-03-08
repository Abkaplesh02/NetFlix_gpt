export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  export const USER_AVATAR =
  "https://lh3.googleusercontent.com/a/ACg8ocL8getpX9MBSnhBbcokcsVyDvNwqYJt7MawWL2SZzfuXX_bUVk=s360-c-no";

  export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  export const API_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer"+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN="https://image.tmdb.org/t/p/w500";

  export const SUPPORTED_LANGUAGES=[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}];

  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;

  export const SearchApi="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
