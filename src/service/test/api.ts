export const getTestApi = async () => {
  try {
    const res = await fetch('http://43.198.219.216:10060/api/connect');
    
    if (res.status !== 200) {
      throw new Error("錯誤");
    }

    const data = await res.json();    
    return data;
  } catch (error) {
    console.error('API 請求發生錯誤：', error);
    throw error;
  }
}