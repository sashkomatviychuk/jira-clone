import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const IssueLoader: FC = () => (
  <ContentLoader height={300} width={940} speed={2}>
    <rect x="0" y="12" rx="3" ry="3" width="938" height="32" />
    <rect x="0" y="75" rx="3" ry="3" width="627" height="24" />
    <rect x="0" y="106" rx="3" ry="3" width="506" height="24" />
    <rect x="0" y="150" rx="3" ry="3" width="590" height="16" />
    <rect x="0" y="172" rx="3" ry="3" width="627" height="16" />
    <rect x="0" y="194" rx="3" ry="3" width="480" height="16" />
    <rect x="0" y="216" rx="3" ry="3" width="370" height="16" />
    <circle cx="18" cy="276" r="18" />
    <rect x="46" y="257" rx="3" ry="3" width="548" height="42" />
    <rect x="683" y="75" rx="3" ry="3" width="135" height="14" />
    <rect x="683" y="105" rx="3" ry="3" width="255" height="24" />
    <rect x="683" y="162" rx="3" ry="3" width="135" height="14" />
    <rect x="683" y="192" rx="3" ry="3" width="255" height="24" />
    <rect x="683" y="249" rx="3" ry="3" width="135" height="14" />
    <rect x="683" y="279" rx="3" ry="3" width="255" height="24" />
  </ContentLoader>
);

export default IssueLoader;
