import { useEffect, useState } from 'react';

export function useUrl() {
    const [url, setUrl] = useState<string>("/api");
    return url ;
}
