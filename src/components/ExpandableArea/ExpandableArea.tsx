import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import GhostButton from '../ui/Button/GhostButton/GhostButton';
import {
  buttonContainerStyle,
  contentStyle,
  expandableAreaStyle,
} from './styles';
import Icon from '../ui/Icon';

interface ExpandableAreaProps {
  initialExpanded?: boolean;
  children: React.ReactNode;
  expandText?: string;
  collapseText?: string;
  onExpandChange?: (expanded: boolean) => void;
}

const ExpandableArea: React.FC<ExpandableAreaProps> = ({
  initialExpanded = false,
  children,
  expandText,
  collapseText,
  onExpandChange,
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(initialExpanded);

  const defaultExpandText = expandText || t('components.expandableArea.learnMore');
  const defaultCollapseText = collapseText || t('components.expandableArea.collapse');

  const toggleExpand = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onExpandChange?.(newExpanded);
  };

  return (
    <div style={expandableAreaStyle}>
      <div style={contentStyle(expanded)}>{children}</div>
      <div style={buttonContainerStyle}>
        <GhostButton
          onClick={toggleExpand}
          loading={false}
          icon={<Icon name="Triangle" />}
          style={{
            width: '100%',
            transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        >
          {expanded ? defaultCollapseText : defaultExpandText}
        </GhostButton>
      </div>
    </div>
  );
};

export default ExpandableArea;
