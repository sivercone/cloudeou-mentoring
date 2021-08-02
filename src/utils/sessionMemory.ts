export const sessionMemory = {
   get(key: string) {
      const value = typeof window !== 'undefined' ? sessionStorage.getItem(key) : null;
      return value;
   },

   set(key: string, value: any) {
      sessionStorage.setItem(key, JSON.stringify(value));
   },
};
