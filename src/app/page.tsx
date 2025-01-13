"use client";
import { Col } from 'antd';
import Editor from '../components/Editor/Editor';
import '../styles/editor.css'; 

export default function Home() {
  const descriptionData = "<p style=\"text-align: center\"><b>Lorem Ipsum</b></p><p style=\"text-align: center\"><em>\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\"</em></p><p style=\"text-align: center\">\"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\"</p><hr><p>What is Lorem Ipsum?</p><p style=\"text-align: justify\"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Why do we use it?</p><p style=\"text-align: justify\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p><p>Where does it come from?</p><p style=\"text-align: justify\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p><p style=\"text-align: justify\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p>Where can I get some?</p><p style=\"text-align: justify\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><table style=\"min-width: 100px\"><colgroup><col style=\"min-width: 25px\"><col style=\"min-width: 25px\"><col style=\"min-width: 25px\"><col style=\"min-width: 25px\"></colgroup><tbody><tr><td colspan=\"1\" rowspan=\"2\"><p></p></td><td colspan=\"1\" rowspan=\"2\"><table style=\"min-width: 50px\"><colgroup><col style=\"min-width: 25px\"><col style=\"min-width: 25px\"></colgroup><tbody><tr><td colspan=\"1\" rowspan=\"1\"><p></p></td><td colspan=\"1\" rowspan=\"1\"><p>paragraphs</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p></p></td><td colspan=\"1\" rowspan=\"1\"><p>words</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p></p></td><td colspan=\"1\" rowspan=\"1\"><p>bytes</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p></p></td><td colspan=\"1\" rowspan=\"1\"><p>lists</p></td></tr></tbody></table></td><td colspan=\"1\" rowspan=\"1\"><p></p></td><td colspan=\"1\" rowspan=\"1\"><p>Start with 'Lorem<br>ipsum dolor sit amet...'</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p></p></td><td colspan=\"1\" rowspan=\"1\"><p></p></td></tr></tbody></table><hr><p><strong>Donate:</strong> If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"lnk\" href=\"https://www.lipsum.com/donate\"><strong>here</strong></a> to donate using PayPal. Thank you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF</p><hr><p><strong>Translations:</strong> Can you help translate this site into a foreign language ? Please email us with details if you can help.</p><hr><p>There is a set of mock banners available <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"lnk\" href=\"https://www.lipsum.com/banners\"><strong>here</strong></a> in three colours and in a range of standard banner sizes:<br></p><hr><p><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/traviskaufman/node-lipsum\">NodeJS</a> <a target=\"_blank\" rel=\"noopener\" href=\"https://code.google.com/p/pypsum/\">Python Interface</a> <a target=\"_blank\" rel=\"noopener\" href=\"https://gtklipsum.sourceforge.net/\">GTK Lipsum</a> <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/gsavage/lorem_ipsum/tree/master\">Rails</a> <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/cerkit/LoremIpsum/\">.NET</a></p><hr><hr><p><strong>The standard Lorem Ipsum passage, used since the 1500s</strong></p><p style=\"text-align: justify\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>";

  return (
    <div
       style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '16px',
        alignItems: 'end'
      }}
    >
      <Col
        style={{
          backgroundColor: 'white',
          minHeight: '80vh',
          width: '100%',
          padding: '32px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          overflowY: 'auto',
        }}
      >
        <Editor
          description={descriptionData}
        />
      </Col>
    </div>

   

  );
}
