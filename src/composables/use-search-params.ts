export default function useSearchParams() {
  const baseURL = "https://randomuser.me/api/";

  const params = {
    seed: 'rika',
    results: '100'
  }

  const paramString = new URLSearchParams(params).toString()
  const url = baseURL + '?' + paramString
 
  return {
    url
  };
}
