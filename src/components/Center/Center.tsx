import clsx from 'clsx';
import styles from './Center.module.css';
import { paddingVariables } from '../../utils/style';
import type { PaddingProps } from '../../types/style';
import type { FC, PropsWithChildren, CSSProperties } from 'react';

type Props = {
  /**
   * 内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します
   */
  textCenter?: boolean;
  /**
   * 子要素を中央に配置。孫要素には影響しません
   */
  childrenCenter?: boolean;
  /**
   * 横幅の最大値
   */
  maxWidth?: string;
  /**
   * HTMLのID属性の値
   */
  id?: string;
} & PaddingProps;

export const Center: FC<PropsWithChildren<Props>> = ({
  children,
  pt,
  pr,
  pb,
  pl,
  textCenter,
  childrenCenter,
  id,
  maxWidth = 'none',
}) => {
  return (
    <div
      id={id}
      className={clsx(styles.center, textCenter && styles.textCenter, childrenCenter && styles.childrenCenter)}
      style={
        {
          '--max-width': maxWidth,
          ...paddingVariables({
            pt,
            pr,
            pb,
            pl,
          }),
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};
