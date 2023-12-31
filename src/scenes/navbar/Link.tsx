import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string;
  selectedPage: string;
  // setSelectedPage: (value: string) => void;
  setSelectedPage: (value: SelectedPage) => void;
}

// const Link = (props: Props) => {
const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: Props) => {

  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    // react-anchor-link-smooth-scroll の機能で使える
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      // 型が setSelectedPage: (value: SelectedPage) => void; なので const lowerCasePage に as SelectedPage; を設定する必要あり
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;