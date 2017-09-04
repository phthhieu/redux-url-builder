import urlBuilder from '../src';

describe('urlBuilder', () => {
  describe('when domain is a string', () => {
    it('should return correctly', () => {
      const domain = urlBuilder('/api/v1');
      expect(domain.resources.getList()).toEqual('/api/v1/resources/getList');
    });
  });

  describe('when domain is a selector', () => {
    it('should return correctly', () => {
      const state = {
        domain: '/api/v1',
      };
      const domainSelector = ({ domain }) => domain;
      const domain = urlBuilder(domainSelector);
      expect(domain.resources.getList(state)).toEqual('/api/v1/resources/getList');
    });
  });
});
