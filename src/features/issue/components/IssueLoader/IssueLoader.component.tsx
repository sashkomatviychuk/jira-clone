import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const IssueLoader: FC = () => (
  <ContentLoader height={300} speed={2} width={940}>
    <rect height="32" rx="3" ry="3" width="938" x="0" y="12" />
    <rect height="24" rx="3" ry="3" width="627" x="0" y="75" />
    <rect height="24" rx="3" ry="3" width="506" x="0" y="106" />
    <rect height="16" rx="3" ry="3" width="590" x="0" y="150" />
    <rect height="16" rx="3" ry="3" width="627" x="0" y="172" />
    <rect height="16" rx="3" ry="3" width="480" x="0" y="194" />
    <rect height="16" rx="3" ry="3" width="370" x="0" y="216" />
    <circle cx="18" cy="276" r="18" />
    <rect height="42" rx="3" ry="3" width="548" x="46" y="257" />
    <rect height="14" rx="3" ry="3" width="135" x="683" y="75" />
    <rect height="24" rx="3" ry="3" width="255" x="683" y="105" />
    <rect height="14" rx="3" ry="3" width="135" x="683" y="162" />
    <rect height="24" rx="3" ry="3" width="255" x="683" y="192" />
    <rect height="14" rx="3" ry="3" width="135" x="683" y="249" />
    <rect height="24" rx="3" ry="3" width="255" x="683" y="279" />
  </ContentLoader>
);

export default IssueLoader;
