import { LineOutlined } from '@ant-design/icons';
import { Space, Tooltip, Dropdown, Button } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaBold,
  FaUnderline,
  FaItalic,
  FaListOl,
  FaQuoteLeft,
  FaStrikethrough,
  FaRedo,
  FaUndo,
  FaListUl,
  FaLink,
  FaUnlink,
  FaRulerHorizontal,
  FaHeading,
  FaFont,
  FaTable,
} from 'react-icons/fa';
import { Editor } from '@tiptap/react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuListTodo } from "react-icons/lu";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { LiaParagraphSolid } from "react-icons/lia";

interface MenuBarProps {
  editor: Editor | undefined;
}

export const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  const { t } = useTranslation();

  const toggleLink = useCallback(() => {
    if (editor?.isActive('link')) {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
      const previousUrl = editor?.getAttributes('link').href;
      let url = window.prompt('URL', previousUrl);

      if (url === null) {
        return;
      }

      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `https://${url}`;
      }

      if (url === '') {
        editor?.chain().focus().extendMarkRange('link').unsetLink().run();
        return;
      }

      editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }
  
  const Headings = () => ({
    items: [
      {
        key: 'paragraph',
        label: (
          <button
            onClick={() => editor?.chain().focus().setParagraph().run()}
            className={editor?.isActive('paragraph') ? 'is-active-heading button-css' : 'button-css'}
          >
            <Space direction='horizontal'>
              <Space>
                <LiaParagraphSolid />
              </Space>
              <Space>{t('Paragraph')}</Space>
            </Space>
          </button>
        ),
      },
      {
        key: 'heading-1',
        label: (
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
            className={
              editor?.isActive('heading', { level: 2 }) ? 'is-active-heading button-css' : 'button-css'
            }
          >
            <Space direction='horizontal'>
            <Space>
              <LuHeading1 />
            </Space>
            <Space>{t('Heading 1')}</Space>
          </Space>
          </button>
        ),
      },
      {
        key: 'heading-2',
        label: (
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
            className={
              editor?.isActive('heading', { level: 3 }) ? 'is-active-heading button-css' : 'button-css'
            }
          >
            <Space direction='horizontal'>
            <Space>
              <LuHeading2 />
            </Space>
            <Space>{t('Heading 2')}</Space>
          </Space>
          </button>
        ),
      },
      {
        key: 'heading-3',
        label: (
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
            className={
              editor?.isActive('heading', { level: 4 }) ? 'is-active-heading button-css' : 'button-css'
            }
          >
            <Space direction='horizontal'>
            <Space>
              <LuHeading3 />
            </Space>
            <Space>{t('Heading 3')}</Space>
          </Space>
          </button>
        ),
      },
    ],
  });
  

  const Table = () => ({
    items: [
      {
        key: 'insertTable',
        label: (
          <button
            onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
          >
            {t('Insert table')}
          </button>
        ),
      },
      {
        key: 'addColumnBefore',
        label: (
          <button
            onClick={() => editor.chain().focus().addColumnBefore().run()}
            disabled={!editor.can().addColumnBefore()}
          >
            {t('Add column before')}
          </button>
        ),
      },
      {
        key: 'addColumnAfter',
        label: (
          <button
            onClick={() => editor.chain().focus().addColumnAfter().run()}
            disabled={!editor.can().addColumnAfter()}
          >
            {t('Add column after')}
          </button>
        ),
      },
      {
        key: 'deleteColumn',
        label: (
          <button
            onClick={() => editor.chain().focus().deleteColumn().run()}
            disabled={!editor.can().deleteColumn()}
          >
            {t('Delete column')}
          </button>
        ),
      },
      {
        key: 'addRowBefore',
        label: (
          <button
            onClick={() => editor.chain().focus().addRowBefore().run()}
            disabled={!editor.can().addRowBefore()}
          >
            {t('Add row before')}
          </button>
        ),
      },
      {
        key: 'addRowAfter',
        label: (
          <button
            onClick={() => editor.chain().focus().addRowAfter().run()}
            disabled={!editor.can().addRowAfter()}
          >
            {t('Add row after')}
          </button>
        ),
      },
      {
        key: 'deleteRow',
        label: (
          <button
            onClick={() => editor.chain().focus().deleteRow().run()}
            disabled={!editor.can().deleteRow()}
          >
            {t('Delete row')}
          </button>
        ),
      },
      {
        key: 'deleteTable',
        label: (
          <button
            onClick={() => editor.chain().focus().deleteTable().run()}
            disabled={!editor.can().deleteTable()}
          >
            {t('Delete table')}
          </button>
        ),
      },
      {
        key: 'mergeCells',
        label: (
          <button
            onClick={() => editor.chain().focus().mergeCells().run()}
            disabled={!editor.can().mergeCells()}
          >
            {t('Merge cells')}
          </button>
        ),
      },
      {
        key: 'splitCell',
        label: (
          <button
            onClick={() => editor.chain().focus().splitCell().run()}
            disabled={!editor.can().splitCell()}
          >
            {t('Split cell')}
          </button>
        ),
      },
      {
        key: 'toggleHeaderColumn',
        label: (
          <button
            onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
            disabled={!editor.can().toggleHeaderColumn()}
          >
            {t('ToggleHeaderColumn')}
          </button>
        ),
      },
      {
        key: 'toggleHeaderRow',
        label: (
          <button
            onClick={() => editor.chain().focus().toggleHeaderRow().run()}
            disabled={!editor.can().toggleHeaderRow()}
          >
            {t('Toggle header row')}
          </button>
        ),
      },
      {
        key: 'toggleHeaderCell',
        label: (
          <button
            onClick={() => editor.chain().focus().toggleHeaderCell().run()}
            disabled={!editor.can().toggleHeaderCell()}
          >
            {t('Toggle header cell')}
          </button>
        ),
      },
      {
        key: 'mergeOrSplit',
        label: (
          <button
            onClick={() => editor.chain().focus().mergeOrSplit().run()}
            disabled={!editor.can().mergeOrSplit()}
          >
            {t('Merge or split')}
          </button>
        ),
      },
      {
        key: 'setCellAttribute',
        label: (
          <button
            onClick={() => editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()}
            disabled={!editor.can().setCellAttribute('backgroundColor', '#FAF594')}
          >
            {t('Set cell attribute')}
          </button>
        ),
      },
    ],
  });
  

  const FontFamily = () => ({
    items: [
      {
        key: 'inter',
        label: (
          <button
            onClick={() => editor?.chain().focus().setFontFamily('Inter').run()}
            className={
              editor?.isActive('textStyle', { fontFamily: 'Inter' })
                ? 'is-active-heading button-css'
                : 'button-css'
            }
            data-test-id="inter"
          >
            <Space style={{ fontFamily: 'Inter' }}>{t('Inter')}</Space>
          </button>
        ),
      },
      {
        key: 'comic-sans',
        label: (
          <button
            onClick={() => editor?.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()}
            className={
              editor?.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' })
                ? 'is-active-heading button-css'
                : 'button-css'
            }
            data-test-id="comic-sans"
          >
            <Space style={{ fontFamily: 'Comic Sans MS, Comic Sans' }}>{t('Comic-sans')}</Space>
          </button>
        ),
      },
      {
        key: 'serif',
        label: (
          <button
            onClick={() => editor?.chain().focus().setFontFamily('serif').run()}
            className={
              editor?.isActive('textStyle', { fontFamily: 'serif' })
                ? 'is-active-heading button-css'
                : 'button-css'
            }
            data-test-id="serif"
          >
            <Space style={{ fontFamily: 'serif' }}>{t('Serif')}</Space>
          </button>
        ),
      },
      {
        key: 'monospace',
        label: (
          <button
            onClick={() => editor?.chain().focus().setFontFamily('monospace').run()}
            className={
              editor?.isActive('textStyle', { fontFamily: 'monospace' })
                ? 'is-active-heading button-css'
                : 'button-css'
            }
            data-test-id="monospace"
          >
            <Space style={{ fontFamily: 'monospace' }}>{t('Monospace')}</Space>
          </button>
        ),
      },
      {
        key: 'cursive',
        label: (
          <button
            onClick={() => editor?.chain().focus().setFontFamily('cursive').run()}
            className={
              editor?.isActive('textStyle', { fontFamily: 'cursive' })
                ? 'is-active-heading button-css'
                : 'button-css'
            }
            data-test-id="cursive"
          >
            <Space style={{ fontFamily: 'cursive' }}>{t('Cursive')}</Space>
          </button>
        ),
      },
      {
        key: 'css-variable',
        label: (
          <button
            onClick={() =>
              editor?.chain().focus().setFontFamily('var(--title-font-family)').run()
            }
            className={
              editor?.isActive('textStyle', { fontFamily: 'var(--title-font-family)' })
                ? 'is-active-heading button-css'
                : 'button-css'
            }
            data-test-id="css-variable"
          >
            <Space style={{ fontFamily: 'var(--title-font-family)' }}>{t('Css-variable')}</Space>
          </button>
        ),
      },
      {
        key: 'comic-sans-quoted',
        label: (
          <button
            onClick={() =>
              editor?.chain().focus().setFontFamily('"Comic Sans MS", "Comic Sans"').run()
            }
            className={
              editor?.isActive('textStyle', { fontFamily: '"Comic Sans"' })
                ? 'is-active-heading button-css'
                : 'button-css'
            }
            data-test-id="comic-sans-quoted"
          >
            <Space style={{ fontFamily: '"Comic Sans MS", "Comic Sans"' }}>
              {t('Comic-sans-quoted')}
            </Space>
          </button>
        ),
      },
      {
        key: 'unsetFontFamily',
        label: (
          <button
            onClick={() => editor?.chain().focus().unsetFontFamily().run()}
            data-test-id="unsetFontFamily"
            className="button-css"
          >
            {t('Unset font family')}
          </button>
        ),
      },
    ],
  });
  
  const List = () => ({
    items: [
      {
        key: 'bullet-list',
        label: (
          <button
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className={editor?.isActive('bulletList') ? 'is-active-heading button-css' : 'button-css'}
          >
            <Space direction='horizontal'>
            <Space>
              <FaListUl />
            </Space>
            <Space>{t('Bullet list')}</Space>
          </Space>
          </button>
        ),
      },
      {
        key: 'numbered-list',
        label: (
          <button
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            className={editor?.isActive('orderedList') ? 'is-active-heading button-css' : 'button-css'}
          >
            <Space direction='horizontal'>
            <Space>
              <FaListOl />
            </Space>
            <Space>{t('Numbered list')}</Space>
          </Space>
          </button>
        ),
      },
      {
        key: 'todo-list',
        label: (
          <button
            onClick={() => editor?.chain().focus().toggleTaskList().run()}
            className={editor?.isActive('taskList') ? 'is-active-heading button-css' : 'button-css'}
          >
             <Space direction='horizontal'>
            <Space>
              <LuListTodo style={{ height: '1rem', width: '1rem', color: '#48535b' }} />
            </Space>
            <Space>{t('Todo list')}</Space>
          </Space>
          </button>
        ),
      },
    ],
  });
  
  const Extra = () => ({
    items: [
      {
        key: 'quote',
        label: (
          <button
            onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            className={editor?.isActive('blockquote') ? 'is-active-heading button-css' : 'button-css'}
          >
            <Space direction='horizontal'>
            <Space>
              <FaQuoteLeft />
            </Space>
            <Space>{t('Quote')}</Space>
          </Space>
          </button>
        ),
      },
      {
        key: 'undo',
        label: (
          <button
            onClick={() => editor?.chain().focus().undo().run()}
            className="button-css"
          >
           <Space direction='horizontal'>
            <Space>
              <FaUndo />
            </Space>
            <Space>{t('Undo')}</Space>
          </Space>
          </button>
        ),
      },
      {
        key: 'redo',
        label: (
          <button
            onClick={() => editor?.chain().focus().redo().run()}
            className="button-css"
          >
           <Space direction='horizontal'>
            <Space>
              <FaRedo />
            </Space>
            <Space>{t('Redo')}</Space>
          </Space>
          </button>
        ),
      },
    ],
  });

  return (
    <>
      <Space className='bubble-menu'>
        <Tooltip title='Heading' placement='top'>
        <Dropdown menu={Headings()} trigger={['click']}>
          <Button className="button-css">
            <FaHeading />
          </Button>
        </Dropdown>
        </Tooltip>

        <Dropdown menu={List()} trigger={['click']}>
          <Button className='button-css' >{
              <FaListUl
                style={{ border: 'solid 1.5px var(--dark-gray-dark-gray-5)', color: '#48535b' }}
              />
            }</Button>
        </Dropdown>
        <Dropdown menu={FontFamily()} trigger={['click']}>
          <Button className='button-css'> {<FaFont/>} </Button>
        </Dropdown>
        <input
          className='button-css'
          type='color'
          onInput={(event) => {
            if (event.target instanceof HTMLInputElement) {
              editor?.chain().focus().setColor(event.target.value).run();
            }
          }}
          value={editor?.getAttributes('textStyle').color}
          data-testid='setColor'
        />

        <LineOutlined rotate={90} style={{ color: '#48535b' }} />

        <Tooltip title='Bold' placement='top'>
          <Button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            disabled={!editor?.can().chain().focus().toggleBold().run()}
            className={editor?.isActive('bold') ? 'is-active button-css' : 'button-css'}
          >{<FaBold style={{ color: '#48535b' }} />}</Button>
        </Tooltip>

        <Tooltip title='Italic' placement='top'>
          <Button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            disabled={!editor?.can().chain().focus().toggleItalic().run()}
            className={editor?.isActive('italic') ? 'is-active button-css' : 'button-css'}
          >{<FaItalic style={{ color: '#48535b' }} />}</Button>
        </Tooltip>

        <Tooltip title='Underline' placement='top'>
          <Button 
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            disabled={!editor?.can().chain().focus().toggleUnderline().run()}
            className={editor?.isActive('underline') ? 'is-active button-css' : 'button-css'}
          >{<FaUnderline style={{ color: '#48535b' }} />}</Button>
        </Tooltip>

        <Tooltip title='Strike through' placement='top'>
          <Button
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            disabled={!editor?.can().chain().focus().toggleStrike().run()}
            className={editor?.isActive('strike') ? 'is-active button-css' : 'button-css'}
          >{<FaStrikethrough style={{ color: '#48535b' }} />}</Button>
        </Tooltip>
        <LineOutlined rotate={90} style={{ color: '#48535b' }} />

        <Tooltip title='Table' placement='top'>
          {/* <Button
              onClick={() =>
              editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
            }
            className='button-css'
          >{<FaTable style={{ color: '#48535b' }} />}</Button> */}

          
        <Dropdown menu={Table()} trigger={['click']}>
          <Button className='button-css' >{
              <FaTable style={{ color: '#48535b' }} />
            }</Button>
        </Dropdown>

        </Tooltip>

        <Tooltip title='Horizontal Ruler' placement='top'>
          <Button
            onClick={() => editor?.chain().focus().setHorizontalRule().run()}
            className='button-css'
          ><FaRulerHorizontal style={{ color: '#48535b' }} /></Button>
        </Tooltip>

        <Tooltip title={editor?.isActive('link') ? 'Delink' : 'Apply link'} placement='top'>
          <Button
            onClick={toggleLink}
            className={editor?.isActive('link') ? 'is-active button-css' : 'button-css'}
          >{
            editor?.isActive('link') ? (
              <FaUnlink style={{ color: '#48535b' }} />
            ) : (
              <FaLink style={{ color: '#48535b' }} />
            )
          }</Button>
        </Tooltip>
        <LineOutlined rotate={90} style={{ color: '#48535b' }} />

        <Dropdown menu={Extra()} trigger={['click']}>
          <Button className='button-css'
          >{<HiOutlineDotsVertical/>} </Button>
        </Dropdown>

      </Space>
    </>
  );
};
