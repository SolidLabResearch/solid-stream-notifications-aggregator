import { CacheService } from './CacheService';

describe('CacheService', () => {
    let cacheService: CacheService;

    beforeEach(() => {
        cacheService = new CacheService();
    });

    afterEach(async () => {
        await cacheService.disconnect();
    });

    it('should_connect_to_the_cache', async () => {
        const connected = await cacheService.connect();
        expect(connected).toBe(true);
    });

    it('should_set_and_get_a_value', async () => {
        await cacheService.connect();
        await cacheService.set('key', 'value');
        const value = await cacheService.get('key');
        expect(value).toBe('value');
    });

    it('should_delete_a_value', async () => {
        await cacheService.connect();
        await cacheService.set('key', 'value');
        await cacheService.delete('key');
        const value = await cacheService.get('key');
        expect(value).toBe(null);
    });

    it('should_close_the_connection', async () => {
      
    });
}); 