import React, { FC } from 'react';
import './TemplateComp.scss';

export type ITemplateCompProps = {};

export const TemplateCompDefaultProps = {};

export const TemplateCompNamespace = 'TemplateComp';

const TemplateComp: FC<ITemplateCompProps> = () => {
  // Component TemplateComp
  return (
    <div className="template-comp">
      <div className="comp">Area Component</div>
    </div>
  );
};

TemplateComp.displayName = TemplateCompNamespace;
TemplateComp.defaultProps = TemplateCompDefaultProps;
export default React.memo(TemplateComp);
