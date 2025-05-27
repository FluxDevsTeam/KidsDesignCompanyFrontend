export const factoryData = async () => {
    try {
      const response = await fetch('https://kidsdesigncompany.pythonanywhere.com/api/factory-manager-dashboard/?format=json');
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };