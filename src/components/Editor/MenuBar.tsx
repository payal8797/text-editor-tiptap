import { Editor } from '@tiptap/react';
import { CheckCircleOutlined, LineOutlined } from '@ant-design/icons';
import { Space, Tooltip, Dropdown, Button } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaBold,
  FaUnderline,
  FaItalic,
  FaQuoteLeft,
  FaStrikethrough,
  FaRedo,
  FaUndo,
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
  FaLink,
  FaUnlink,
  FaImage,
  FaRulerHorizontal,
  FaTable,
} from 'react-icons/fa';

interface MenuBarProps {
  editor: Editor | undefined;
}
export const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  const { t } = useTranslation();

  const addImage = useCallback(() => {
    let url = window.prompt('URL');
    if (url) {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `https://${url}`;
      }
      editor?.chain().focus().setNode('image', { src: url }).run();
    }
  }, [editor]);

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
  
  const FontFamily = () => {
    return (
      <Space direction='vertical' className='tiptap-dropdown'>
        <button
          onClick={() => editor?.chain().focus().setFontFamily('Inter').run()}
          className={
            editor?.isActive('textStyle', { fontFamily: 'Inter' })
              ? 'is-active-heading button-css'
              : 'button-css'
          }
          data-test-id='inter'
        >
          <Space style={{ fontFamily: 'Inter' }}>{t('Inter')}</Space>
        </button>
        <button
          onClick={() => editor?.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()}
          className={
            editor?.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' })
              ? 'is-active-heading button-css'
              : 'button-css'
          }
          data-test-id='comic-sans'
        >
          <Space style={{ fontFamily: 'comic-sans' }}>{t('Comic-sans')}</Space>
        </button>
        <button
          onClick={() => editor?.chain().focus().setFontFamily('serif').run()}
          className={
            editor?.isActive('textStyle', { fontFamily: 'serif' })
              ? 'is-active-heading button-css'
              : 'button-css'
          }
          data-test-id='serif'
        >
          <Space style={{ fontFamily: 'serif' }}>{t('Serif')}</Space>
        </button>
        <button
          onClick={() => editor?.chain().focus().setFontFamily('monospace').run()}
          className={
            editor?.isActive('textStyle', { fontFamily: 'monospace' })
              ? 'is-active-heading button-css'
              : 'button-css'
          }
          data-test-id='monospace'
        >
          <Space style={{ fontFamily: 'monospace' }}>{t('Monospace')}</Space>
        </button>
        <button
          onClick={() => editor?.chain().focus().setFontFamily('cursive').run()}
          className={
            editor?.isActive('textStyle', { fontFamily: 'cursive' })
              ? 'is-active-heading button-css'
              : 'button-css'
          }
          data-test-id='cursive'
        >
          <Space style={{ fontFamily: 'cursive' }}>{t('Cursive')}</Space>
        </button>
        <button
          onClick={() => editor?.chain().focus().setFontFamily('var(--title-font-family)').run()}
          className={
            editor?.isActive('textStyle', { fontFamily: 'var(--title-font-family)' })
              ? 'is-active-heading button-css'
              : 'button-css'
          }
          data-test-id='css-variable'
        >
          <Space style={{ fontFamily: 'css-variable' }}>{t('Css-variable')}</Space>
        </button>
        <button
          onClick={() =>
            editor?.chain().focus().setFontFamily('"Comic Sans MS", "Comic Sans"').run()
          }
          className={
            editor?.isActive('textStyle', { fontFamily: '"Comic Sans"' })
              ? 'is-active-heading button-css'
              : 'button-css'
          }
          data-test-id='comic-sans-quoted'
        >
          <Space style={{ fontFamily: 'comic-sans-quoted' }}>{t('Comic-sans-quoted')}</Space>
        </button>
        <button
          onClick={() => editor?.chain().focus().unsetFontFamily().run()}
          data-test-id='unsetFontFamily'
          className='button-css'
        >
          Unset font family
        </button>
      </Space>
    );
  };
  const Alignment = () => {
    return (
      <Space direction='vertical' className='tiptap-dropdown'>
        <button
          onClick={() => editor?.chain().focus().setTextAlign('left').run()}
          className={
            editor?.isActive({ textAlign: 'left' }) ? 'is-active-heading button-css' : 'button-css'
          }
          style={{ color: '#48535b' }}
        >
          <Space direction='horizontal'>
            <Space>
              <FaAlignLeft />
            </Space>
            <Space>{t('Align left')}</Space>
          </Space>
        </button>

        <button
          onClick={() => editor?.commands.setTextAlign('center')}
          className={
            editor?.isActive({ textAlign: 'center' }) ? 'is-active-heading button-css' : 'button-css'
          }
          style={{ color: '#48535b' }}
        >
          <Space direction='horizontal'>
            <Space>
              <FaAlignCenter />
            </Space>
            <Space>{t('Align center')}</Space>
          </Space>
        </button>

        <button
          onClick={() => editor?.chain().focus().setTextAlign('right').run()}
          className={
            editor?.isActive({ textAlign: 'right' }) ? 'is-active-heading button-css' : 'button-css'
          }
          style={{ color: '#48535b' }}
        >
          <Space direction='horizontal'>
            <Space>
              <FaAlignRight />
            </Space>
            <Space>{t('Align right')}</Space>
          </Space>
        </button>

        <button
          onClick={() => editor?.chain().focus().setTextAlign('justify').run()}
          className={
            editor?.isActive({ textAlign: 'justify' })
              ? 'is-active-heading button-css'
              : 'button-css'
          }
          style={{ color: '#48535b' }}
        >
          <Space direction='horizontal'>
            <Space>
              <FaAlignJustify />
            </Space>
            <Space>{t('Justify')}</Space>
          </Space>
        </button>
      </Space>
    );
  };

  return (
    <>
      <Space className='bubble-menu'>
         

        <Dropdown overlay={Alignment()}>
          <Button
            className='button-css'
          >
            <FaAlignLeft style={{ border: 'solid 1.5px var(--dark-gray-dark-gray-5)', color: '#48535b' }} /></Button>
        </Dropdown>

        
        <Dropdown overlay={FontFamily()}>
          <Button className='button-css' >Font</Button>
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
          > <FaBold style={{ color: '#48535b' }} /></Button>
        </Tooltip>

        <Tooltip title='Italic' placement='top'>
          <Button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            disabled={!editor?.can().chain().focus().toggleItalic().run()}
            className={editor?.isActive('italic') ? 'is-active button-css' : 'button-css'}
          ><FaItalic style={{ color: '#48535b' }} /></Button>
        </Tooltip>

        <Tooltip title='Underline' placement='top'>
          <Button
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            disabled={!editor?.can().chain().focus().toggleUnderline().run()}
            className={editor?.isActive('underline') ? 'is-active button-css' : 'button-css'}
          ><FaUnderline style={{ color: '#48535b' }} /></Button>
        </Tooltip>

        <Tooltip title='Strike through' placement='top'>
          <Button
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            disabled={!editor?.can().chain().focus().toggleStrike().run()}
            className={editor?.isActive('strike') ? 'is-active button-css' : 'button-css'}
          ><FaStrikethrough style={{ color: '#48535b' }} /></Button>
        </Tooltip>

        <Tooltip title='Todo list' placement='top'>
          <Button
            onClick={() => editor?.chain().focus().toggleTaskList().run()}
            className={editor?.isActive('taskList') ? 'is-active-heading button-css' : 'button-css'}
            style={{ color: '#48535b' }}
          >
            <Space direction='horizontal'>
              <Space>
                <CheckCircleOutlined style={{ height: '1rem', width: '1rem', color: '#48535b' }} />
              </Space>
            </Space>
          </Button>
        </Tooltip>

        <LineOutlined rotate={90} style={{ color: '#48535b' }} />

        <Tooltip title='Table' placement='top'>
          <Button
            onClick={() =>
              editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
            }
            className='button-css'
          ><FaTable style={{ color: '#48535b' }} /></Button>
        </Tooltip>

        <Tooltip title='Insert image' placement='top'>
          <Button
             onClick={addImage}
            className='button-css'
        ><FaImage style={{ color: '#48535b' }} /></Button>
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
          >{ editor?.isActive('link') ? (
            <FaUnlink style={{ color: '#48535b' }} />
          ) : (
            <FaLink style={{ color: '#48535b' }} />
          )}</Button>
        </Tooltip>
        <LineOutlined rotate={90} style={{ color: '#48535b' }} />

        <Tooltip title='Quote' placement='top'>
        <Button
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          className={editor?.isActive('blockquote') ? 'is-active-heading button-css' : 'button-css'}
          style={{ color: '#48535b' }}
        >
          <Space direction='horizontal'>
            <Space>
              <FaQuoteLeft />
            </Space>
          </Space>
        </Button>
        </Tooltip>

        <Tooltip title='Undo' placement='top'>
        <Button
          onClick={() => editor?.chain().focus().undo().run()}
          // disabled={!editor?.can().chain().focus().undo().run()}
          className={editor?.isActive('undo') ? 'is-active-heading button-css' : 'button-css'}
          style={{ color: '#48535b' }}
        >
          <Space direction='horizontal'>
            <Space>
              <FaUndo />
            </Space>
          </Space>
        </Button>
        </Tooltip>

        <Tooltip title='Redo' placement='top'>
        <Button
          onClick={() => editor?.chain().focus().redo().run()}
          // disabled={!editor?.can().chain().focus().redo().run()}
          className={editor?.isActive('redo') ? 'is-active-heading button-css' : 'button-css'}
          style={{ color: '#48535b' }}
        >
          <Space direction='horizontal'>
            <Space>
              <FaRedo />
            </Space>
          </Space>
        </Button>
        </Tooltip>
      </Space>

    </>
  );
};
