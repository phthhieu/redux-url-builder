import urlBuilderForString from './urlBuilderForString';
import urlBuilderForSelector from './urlBuilderForSelector';

export default function(domain) {
  return (
    typeof domain === 'function'
      ? urlBuilderForSelector(domain)
      : urlBuilderForString(domain)
  );
}
