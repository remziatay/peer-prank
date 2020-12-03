<template>
  <div>
    <scare-panel
      v-if="settings"
      v-bind="settings"
      :on="jump"
      @sound-ready="sendMessage({ soundReady: $event })"
      @picture-ready="sendMessage({ pictureReady: $event })"
      @started="sendMessage({ started: true })"
      @ended="sendMessage({ ended: true }) || (jump = false)"
    />
    <div
      class="py-4 px-8 my-4 max-w-screen-xl mx-auto bg-gray-50 bg-opacity-75"
    >
      <p class="text-justify text-lg tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur
        laudantium magni, facilis eos tempore nihil. Voluptates saepe reiciendis
        magni. Recusandae nostrum quia temporibus, asperiores similique esse
        quas culpa nesciunt? Delectus ipsa eius deserunt blanditiis, architecto
        ipsam doloribus saepe sint earum aliquam natus numquam, dolorem nihil
        repellendus, laboriosam recusandae sit labore odio omnis inventore
        libero? Rem, fugit itaque voluptatibus ab nostrum esse aut harum iusto
        temporibus debitis quia? Obcaecati animi ut ab. Quis tempora aliquam
        pariatur debitis quisquam libero id, deleniti magnam dolorem. Repellat
        at quam reprehenderit fugit iure omnis praesentium delectus, repellendus
        dicta doloremque perspiciatis et rem ullam adipisci sit nemo magni
        aliquam nesciunt laboriosam suscipit repudiandae harum mollitia. Ipsum
        nam distinctio sint dolor nulla pariatur recusandae et ducimus deserunt.
        Neque delectus nobis eaque reprehenderit minima saepe maiores veniam
        voluptatum beatae id rerum, aspernatur aut. Maxime nostrum assumenda
        commodi alias corporis mollitia illo voluptas iusto placeat quasi
        praesentium, quae dolor exercitationem libero harum? In delectus
        exercitationem repellendus asperiores earum libero quisquam eligendi
        repellat consequatur, amet possimus, sed maxime! Cum labore inventore
        illo nisi, eveniet sunt veritatis, et facilis vero impedit aliquam
        corporis quo dolorum ab libero quos aspernatur exercitationem officiis
        cupiditate temporibus voluptas suscipit animi quod! Facilis sed
        perspiciatis iste placeat nostrum suscipit possimus praesentium
        molestias, consequuntur voluptatum iure perferendis eligendi tempore
        mollitia ratione! Excepturi, velit repellendus totam explicabo delectus
        at deleniti perspiciatis vel illo soluta quas, quae pariatur laborum
        provident numquam repellat fugit consectetur laudantium, eveniet
        voluptatibus temporibus officiis eius ex! Totam harum autem quisquam nam
        officiis doloremque qui nulla sunt placeat natus eveniet et deserunt
        enim nobis possimus, dolor nihil animi vero corrupti praesentium alias
        culpa ad cumque! Tenetur cum dolorum necessitatibus esse perspiciatis
        debitis fuga error, laboriosam nobis quos eveniet modi unde ex maiores
        tempore molestias placeat autem, ratione dolores commodi consectetur.
        Nobis adipisci harum veniam illo in earum temporibus eius molestias
        libero perferendis modi officiis facilis placeat labore, sequi
        repellendus, voluptatibus atque? Sint at repellendus cupiditate quia hic
        perferendis, vel placeat suscipit? Quidem ea possimus culpa fuga illo,
        doloribus nostrum expedita quod incidunt ex iusto corrupti veniam
        dignissimos accusantium eaque sunt facere recusandae eligendi, alias nam
        magni eius ut dolorem. Natus cum dolorem deleniti velit reiciendis
        facilis ullam magni, minima perspiciatis illum fugiat, officia sunt,
        autem nihil modi aspernatur doloremque saepe facere totam quae quas
        mollitia quidem. Natus distinctio id alias, dolor totam illum sint odit
        nobis voluptatum consequuntur cumque est iusto inventore dicta dolores
        quae voluptas expedita repudiandae. Facere sapiente odit consequuntur?
        Aliquam, consequuntur magnam corrupti dolorum voluptates atque officia
        saepe iste? Neque, cupiditate? Hic magni saepe, voluptates facilis
        eveniet consequatur consectetur temporibus tenetur iure vitae nesciunt
        sunt ducimus debitis quasi vel error ad tempore rem aut aliquid
        repellendus aperiam veritatis deleniti. Labore nobis dolorum sunt libero
        praesentium debitis veritatis ipsa eum totam illo, necessitatibus ab
        doloribus iure hic quidem tempora unde explicabo cupiditate minima
        maxime itaque aspernatur repellendus quos! Doloribus ut repellat labore
        consequatur, quia illo esse, provident nihil, nam dolorem facilis
        adipisci in ex nulla blanditiis autem tenetur doloremque cum odit optio
        ea quaerat nobis. Nam nihil aliquid id saepe adipisci soluta dolores
        quod deserunt quaerat optio accusamus quisquam corporis omnis fugiat,
        repellendus possimus ex nobis laborum. Voluptatum, culpa iusto
        reprehenderit voluptate earum dicta omnis ad amet natus quod,
        consectetur consequuntur nobis deserunt sapiente esse hic? Dolore neque
        laborum nulla temporibus deleniti facere ab, quos, numquam voluptate
        quasi veritatis qui. Nisi, odio debitis mollitia distinctio ad aliquid
        consectetur cumque fugiat quam voluptatibus laudantium in beatae
        praesentium minus iusto, cupiditate aperiam fuga sunt quasi quos?
        Voluptas inventore eum omnis adipisci ullam possimus dolorem, non porro
        esse id perferendis ipsa et architecto molestiae, corrupti iste
        excepturi! Maiores magni laboriosam rerum accusamus et quae? Delectus
        officiis reprehenderit, tenetur veniam ad perspiciatis eius ducimus.
        Repellat hic aut quibusdam maxime, perferendis dolor in. Porro,
        accusantium sequi provident animi quod illo odio unde? Veniam dolor a
        aliquid obcaecati temporibus dolorem quam maiores amet hic ex pariatur
        reprehenderit at, vitae error voluptatum maxime illum necessitatibus sit
        commodi? Magni nostrum aspernatur at! Ut, asperiores pariatur. Nemo, eos
        ipsum amet quisquam eaque, labore sit dicta, alias velit doloribus quas
        sint delectus illo. Itaque quasi hic deleniti ab deserunt, non doloribus
        nulla temporibus natus nisi dolorum, nihil laudantium aliquam
        aspernatur, aut officiis sed voluptas voluptate? Laborum animi error
        fugiat veniam, suscipit nesciunt, exercitationem cupiditate impedit
        facere consequatur voluptatum quidem aliquam, odit eos magnam minima!
        Debitis magnam totam nam repellat odit minus, porro nulla hic minima
        quos accusamus rerum ratione, harum mollitia possimus a nihil ducimus
        quis unde voluptatum dolores omnis numquam officia. Beatae quia
        praesentium sunt saepe ipsum modi nesciunt aut eveniet quisquam
        molestiae magnam iste quod possimus, pariatur odit! Alias libero ratione
        facilis! Perspiciatis nesciunt provident, repudiandae accusantium eum
        inventore assumenda quo vitae optio alias? Quo illum maiores, fugiat
        iste aspernatur repudiandae tempora nam eveniet non ex blanditiis itaque
        quisquam molestiae reiciendis dignissimos cumque? Nobis ipsum nam
        tenetur laudantium ut quisquam, natus nisi saepe veritatis non
        perferendis incidunt omnis consequuntur rem accusantium iste delectus
        similique dolor. Saepe assumenda impedit modi praesentium odit, eius
        ipsam ad eligendi sapiente vitae. Consectetur dolorum nostrum cupiditate
        quaerat commodi. Sapiente ea eaque odio reiciendis impedit cupiditate
        consequatur. Voluptates beatae, voluptate possimus dolorum assumenda id
        aliquid excepturi doloribus atque inventore error temporibus, ratione
        aut quis expedita vitae blanditiis quos adipisci? Suscipit aut
        architecto modi, vitae recusandae, accusantium pariatur earum nisi odio
        expedita incidunt voluptatem. Commodi, iste. Deserunt dolores
        perspiciatis saepe, doloremque eaque sit delectus necessitatibus ipsa
        nisi alias, vero ducimus molestias repellat neque tempore tempora,
        perferendis voluptate ipsum aliquid veniam rem reprehenderit aspernatur?
        Culpa dolor voluptatem nisi unde maxime error numquam alias eaque
        architecto ea repellendus cumque, itaque, ab aperiam expedita
        perferendis consectetur qui molestiae et deleniti blanditiis nemo sint.
        Optio neque dignissimos quidem consequatur accusamus, sint quod, autem
        labore minima perspiciatis ducimus nam, animi tempora ipsum recusandae
        adipisci aut. Doloribus odio, labore dolor consectetur quibusdam quae
        quia. Ipsam tempore eos numquam cupiditate aut! Itaque quis laborum unde
        ab nisi, ipsa dolores nulla repellat, facilis consequatur earum maiores
        neque quaerat sunt esse. Assumenda recusandae itaque aspernatur
        voluptates deleniti dolorem praesentium, dolore dignissimos magni,
        voluptas nam perferendis ex cumque velit? Cum ipsa, accusamus voluptas
        quasi autem ducimus quae veritatis quo praesentium aliquam quibusdam
        qui, sint odio eum quis placeat? Ea, magnam commodi atque architecto
        voluptates ratione eligendi dicta placeat, perspiciatis rem voluptas sit
        dolore quos! Culpa sequi placeat quasi excepturi molestiae vero magni
        ipsum perferendis mollitia dolorem numquam explicabo hic sed quia
        eligendi ratione, reprehenderit accusantium nam ipsa, sint eos
        aspernatur. Quo nostrum velit, atque rem eveniet officiis ea asperiores
        impedit doloremque dolores nesciunt adipisci maiores minima ut
        recusandae laboriosam, animi natus debitis veniam dolore perferendis
        quam? Aut explicabo delectus nostrum ut dolores, atque totam
        exercitationem laboriosam reiciendis error culpa commodi labore
        voluptatum ea, optio perspiciatis fugit nemo dolorem doloremque maxime
        veritatis incidunt? Adipisci, quia veritatis. Quae minima consectetur
        inventore quo explicabo. Voluptas aperiam incidunt laborum perferendis
        doloremque illo aliquid hic ratione itaque iste in, error natus
        reiciendis ipsum, adipisci vel molestiae voluptates omnis unde
        consectetur dolorem quaerat! Totam, culpa enim voluptatem obcaecati
        rerum earum in ab suscipit dicta nihil modi dolor officiis. Ducimus
        reprehenderit aliquid voluptatum deleniti accusamus aliquam veniam
        assumenda omnis consectetur architecto vitae culpa odio non a, quos
        quidem voluptates facilis dolorem veritatis libero similique eum?
        Placeat explicabo asperiores voluptates eveniet, provident nisi nemo,
        expedita, iusto voluptatibus a sunt optio. Optio fugiat aliquam alias,
        eveniet cupiditate similique sint necessitatibus modi delectus dolorum
        deserunt voluptatum ratione nostrum tenetur. Explicabo reprehenderit
        iure fuga? Placeat sed illo esse distinctio fugiat fuga obcaecati culpa,
        qui corrupti modi iusto deleniti. Aut fuga hic officia beatae, voluptate
        perspiciatis at velit harum dolores laudantium. Quasi eaque officiis
        eius, maiores, illum saepe quo dolorem quas laboriosam vero eligendi!
        Cumque eaque accusamus distinctio, architecto velit enim molestiae alias
        reprehenderit, voluptatum repellendus impedit incidunt, accusantium
        perferendis pariatur quod provident odit tenetur! Deserunt, excepturi
        totam perferendis sit quam quibusdam quaerat. Eos quod nulla excepturi
        repellendus pariatur tenetur nobis optio numquam aliquid ipsum sed ab
        repudiandae eum voluptatem, debitis quia laudantium beatae aperiam minus
        dolore. Corrupti voluptatem iusto ea. Aliquid fugiat rem error itaque,
        beatae vero! Enim non quibusdam nostrum maiores ducimus, consequuntur
        voluptates nihil assumenda accusamus, distinctio, similique rem quidem
        magnam ut? Quo dolores dolorem qui sunt temporibus ipsum illo labore,
        nobis magni similique quam perferendis sed fugiat autem velit libero
        officiis esse quis laudantium architecto. Minima nesciunt optio sapiente
        esse quos doloribus consequuntur eligendi tempora natus delectus dolorum
        praesentium unde autem ducimus excepturi officiis ipsum officia, commodi
        repellendus corrupti, dolor doloremque debitis et? Aliquam repudiandae
        voluptas itaque ex, illo esse voluptatem eveniet natus placeat molestiae
        corrupti, sequi aut enim provident? Illo iste atque consequuntur ea,
        optio possimus maxime facere fuga ratione voluptates eos, non temporibus
        natus, assumenda in commodi? Eos odio labore repellat at nemo aut
        facilis, voluptate facere temporibus quis. Omnis impedit quia explicabo
        minima dolores blanditiis error voluptatum ex, cumque sequi a culpa
        numquam, velit laboriosam dolore vitae eaque magnam pariatur neque natus
        magni in, aliquam odit. Beatae minima nulla qui sunt tenetur nemo
        voluptates quam ipsum! Dolore tempore mollitia sapiente nostrum, quidem
        placeat iure doloribus laboriosam fugiat, itaque asperiores magni
        incidunt illum similique earum exercitationem reiciendis adipisci
        voluptas beatae quis quam omnis qui nam? Doloremque iure quo laudantium
        id exercitationem atque quidem ipsam impedit expedita cum eveniet ab,
        eos eaque, eligendi amet numquam velit vero sed omnis temporibus qui ea
        perspiciatis tenetur! Vitae dolores, eaque omnis vero voluptates
        architecto earum voluptate sint, facere, deserunt impedit aut labore.
        Laudantium labore nesciunt, repudiandae est sint facilis adipisci,
        maiores eos dignissimos, ullam sed quis iste sequi quae quasi
        reprehenderit suscipit? Molestiae odio tempora optio aspernatur! Nisi
        illum quaerat porro saepe rem debitis qui officia optio, doloribus odio
        non, exercitationem atque assumenda esse quia harum. Ut molestias,
        aliquid autem blanditiis non aut dignissimos vitae laborum, eaque earum
        omnis a laudantium perferendis accusamus in facilis modi vero nesciunt
        atque! Alias voluptatum cupiditate dignissimos, rem a at adipisci?
        Praesentium alias aliquid, voluptatem rerum, qui deleniti, eaque sequi
        quia cumque voluptatibus eligendi possimus quas optio cum! Voluptas
        laudantium quibusdam expedita sed ut perferendis eum, ipsa ullam unde
        sit exercitationem sunt odit optio ipsam incidunt ab. Et sit dolorum
        doloremque. Voluptas, eveniet cum. Voluptatum, sequi? Temporibus,
        laborum aliquid. Iste rem enim quibusdam est voluptas in voluptatem sit?
        Esse temporibus illum maxime error laborum doloribus rerum quasi
        necessitatibus pariatur incidunt. Unde, ducimus. Numquam repellendus
        voluptas dolorem laborum magni doloremque expedita nihil tempora?
        Quisquam facere molestiae tempore at aperiam quae a obcaecati nulla
        excepturi architecto cum soluta voluptates blanditiis nam
        exercitationem, doloremque, laudantium maiores, numquam sunt placeat
        amet mollitia. Mollitia, tempore odio libero voluptatibus itaque
        dolores, ipsa debitis id commodi similique magni, molestias
        reprehenderit vero eveniet tempora saepe! Illo eaque officiis assumenda
        aliquid, recusandae minima possimus. Mollitia molestias esse laudantium
        minus blanditiis voluptas distinctio fugit earum nam excepturi obcaecati
        enim necessitatibus aliquam omnis doloribus, delectus quae iusto illum
        modi tempora tenetur suscipit! Minima alias totam dolor obcaecati eaque
        in debitis deleniti autem eveniet consequatur ab numquam reiciendis
        incidunt blanditiis tenetur labore aut quo fugit deserunt quam dolore
        soluta, porro sequi? Nostrum, nemo accusantium libero qui iure aperiam
        ex, obcaecati eius dolore deleniti quisquam? Numquam, rem et autem ad
        laborum incidunt veritatis vero officiis sunt ab temporibus, iste
        perspiciatis, commodi debitis tenetur magnam itaque quasi odit totam
        unde necessitatibus provident cum officia. Praesentium sapiente neque
        aut ullam odit iure sint perferendis mollitia ab assumenda eveniet
        explicabo quo, architecto similique, dolor magni delectus laborum et
        quisquam tempora ad corporis? Ea excepturi ipsum fuga voluptatibus
        voluptates cumque aliquid autem cupiditate necessitatibus nulla, ab esse
        quis optio libero reiciendis! Laudantium quam ea, natus laborum cumque
        aspernatur eos in laboriosam suscipit non ut at molestias eius nesciunt
        sunt veniam quos dignissimos voluptas excepturi? Quas officiis
        distinctio, optio corrupti dolorem voluptate architecto accusamus
        sapiente iure quo. Aliquid veritatis nam, quaerat assumenda culpa
        doloremque dolores officiis? Cupiditate libero error esse,
        necessitatibus tempora aliquam molestias! At officia tempora quidem,
        quas fugit dolore qui velit libero consectetur repudiandae atque eius
        quos sunt blanditiis error, beatae fuga distinctio eligendi omnis, saepe
        quibusdam laborum tenetur nostrum enim. Voluptatum possimus minus
        ratione, inventore velit exercitationem totam nesciunt ad veniam quia
        praesentium debitis molestias illum, distinctio libero incidunt deleniti
        tempore! Quidem eveniet ex fuga molestiae possimus? Aut repellendus
        neque aspernatur, id impedit officiis debitis corporis quas magni totam
        sit sed laudantium nisi earum obcaecati beatae dolorum fugit nemo
        possimus. Perspiciatis exercitationem, nam libero saepe possimus eius
        ratione unde molestias repellat minus at commodi in, labore voluptates!
        Fuga dicta sapiente non sint libero! Corporis explicabo beatae quo
        soluta porro sapiente debitis illo alias inventore, ad ex ullam facilis
        sequi officia deleniti eligendi odio veritatis minus id laboriosam
        cupiditate similique dignissimos? Eius necessitatibus tempora
        perferendis esse, qui et, rem consectetur est sapiente in odio sit,
        aliquam ipsam quas. Omnis, laborum voluptates? Cumque at, sapiente
        perferendis dolorem ut suscipit pariatur officiis omnis rem veritatis
        sequi doloremque cum in inventore ab hic quas quisquam nam eligendi
        voluptate qui? Voluptatibus quae distinctio incidunt, sit non nemo
        ducimus enim cumque necessitatibus atque excepturi. Quo soluta fugit,
        autem nulla quod maxime dignissimos placeat facilis repellat. Doloribus
        laboriosam placeat sed quod tenetur illo delectus voluptatem excepturi
        laudantium beatae ducimus nam sunt ipsa, sequi recusandae voluptate,
        quam doloremque ut. Sapiente consequuntur omnis atque inventore earum
        quod, obcaecati ab voluptates distinctio necessitatibus unde provident
        maxime fuga voluptas! Consequuntur non facere iusto atque optio
        accusantium modi consequatur aut illum odio itaque reiciendis dicta,
        fugiat maxime totam eligendi. Maiores impedit tenetur rerum. Nostrum,
        saepe! Aliquam, recusandae tempore. Veritatis in architecto quibusdam
        modi, voluptatibus harum at repudiandae numquam deserunt libero sit, ex
        qui fugit obcaecati minima unde! Quia, aspernatur culpa porro
        perferendis reiciendis optio labore repudiandae ratione aliquid officiis
        quo nostrum hic, voluptatum consectetur recusandae aperiam magnam
        tempora, error at facere. Quasi deleniti exercitationem alias atque
        aliquid, pariatur adipisci earum libero animi quisquam, asperiores
        beatae rem iure! Soluta est quas in, velit eos, temporibus ut repellat
        sint delectus pariatur tempora mollitia et odit suscipit tenetur! Animi
        sequi nemo accusamus fuga est reprehenderit qui non sunt rem id nam
        atque labore enim cupiditate ipsa, voluptatum repudiandae doloremque
        aliquam sit, aut facere quam totam laudantium dolorem! Exercitationem,
        architecto reprehenderit ea ex provident ab fugiat ratione, maxime
        corrupti quasi quo vel quidem, cum vitae accusamus dicta laboriosam
        perferendis minus! Iure a dolor reiciendis qui quaerat minima, sint
        commodi ipsa aperiam aspernatur saepe. Odit distinctio expedita fugiat
        similique beatae suscipit labore accusamus laudantium illum nisi odio
        veniam perferendis dolorem architecto debitis eaque ducimus vitae sunt
        fuga fugit dicta, error est atque? Ullam iure error harum quae nihil
        molestias magni dolorum, omnis consequatur impedit, qui facere, velit
        nesciunt iusto quos nam iste laborum obcaecati corporis quibusdam eum
        sed assumenda veniam. Esse omnis cupiditate nihil veritatis maxime iure,
        quos corrupti aliquam praesentium! Molestias necessitatibus enim hic
        debitis sint eos tempora repellendus magni magnam fuga, ipsum illum
        officia molestiae. Officiis asperiores voluptas doloremque cum esse hic
        minima facere incidunt deserunt quia perferendis minus reiciendis ab,
        quibusdam dolor quasi aliquam quos provident qui natus quas. Unde
        reprehenderit, odit magni perferendis perspiciatis quibusdam suscipit
        nemo possimus sint eveniet saepe hic asperiores laboriosam expedita
        dicta voluptas autem quisquam neque nulla sit. Aspernatur unde possimus
        at, excepturi cumque vitae tempora, labore reiciendis atque illum
        distinctio dicta necessitatibus hic dolor ratione! Numquam molestiae
        minus porro quasi autem tempora? Quaerat consequatur officia nostrum
        asperiores aspernatur veritatis est earum. Perspiciatis laudantium
        voluptatum possimus. Quisquam perspiciatis quis eum, ipsum consequuntur
        qui, laborum nesciunt, ullam iste incidunt eos unde a fugit facere
        officia esse hic tenetur similique quo aliquam? Necessitatibus eos unde
        aspernatur quidem excepturi maxime, illo odit ex, autem quibusdam
        officiis architecto delectus. Est corporis quis magnam deserunt,
        accusantium quas amet blanditiis ex impedit, eos animi dicta. Dicta
        architecto modi assumenda omnis numquam consequuntur corporis veniam.
        Minus velit minima quas tempore, odit autem recusandae sit. Omnis eaque
        consequatur cumque, consequuntur similique ipsum nam maiores minima,
        ducimus id, voluptate nihil! Excepturi rerum provident repudiandae
        dolore quae facere eum optio, numquam ipsam ullam accusamus laudantium?
        Eligendi repellendus esse temporibus. Similique nemo laudantium delectus
        ea, dicta libero natus earum, perferendis officiis, quibusdam blanditiis
        eveniet quod sit est reiciendis explicabo autem? Corrupti ab ratione
        natus, animi laboriosam eius, et molestiae illo minus magni aspernatur!
        Quisquam accusantium neque, officiis eligendi, debitis, modi porro rerum
        quasi animi repellendus cupiditate. Dolorem voluptatem fugiat in libero,
        molestias a, laborum fuga suscipit quasi tempore, commodi dolores quas
        nihil hic at blanditiis odit? Recusandae nesciunt totam quo voluptates
        magnam provident soluta nihil veritatis quod labore odio consequatur
        amet placeat eveniet ratione a quidem est, earum debitis! Quod veniam,
        ipsum asperiores magnam consequuntur minus tempore consectetur provident
        ad? Aperiam, quisquam natus cupiditate illo consectetur commodi esse
        nobis velit, animi qui hic asperiores iusto itaque, quam dolore!
        Sapiente sed minus porro alias illo officia omnis inventore rerum fuga
        animi. Adipisci architecto itaque repellat harum explicabo ducimus quos
        odit tenetur placeat voluptas totam dignissimos quae omnis consequuntur
        ullam aliquam perferendis consectetur nemo, ipsam ut vero? Recusandae a
        ex error suscipit earum ullam laboriosam, quo officia hic est
        dignissimos blanditiis doloribus nam ratione tempore iure vitae minima
        reiciendis labore sed! Sint, reprehenderit doloremque distinctio
        obcaecati officia culpa, quae minus perferendis tempore rerum eos quas
        animi iste odio voluptatem voluptas quaerat fuga itaque. Totam nisi
        incidunt iure consectetur sit quidem cum laudantium ratione voluptas
        eveniet eos quis expedita maxime, odio molestiae aut, ea deserunt
        repudiandae veritatis dolor, modi dolores praesentium quas? Odit
        provident veniam facere iste repellendus magnam est pariatur. Sunt
        voluptates iusto, nisi nam molestiae voluptatum voluptas est facere eum
        ad. Dolorem in quos atque maxime vitae laudantium praesentium libero,
        dicta facilis architecto voluptatem expedita error at impedit officia
        corporis voluptatibus illo. Ut, sapiente omnis necessitatibus repellat
        eveniet delectus architecto quia debitis veritatis soluta voluptate
        ipsum impedit tenetur illum repudiandae. Ut necessitatibus odit
        voluptatem vel ullam totam laboriosam labore, tempore quas rem repellat
        aut amet voluptatum ipsa perspiciatis voluptatibus ab sunt architecto
        nesciunt fugit doloremque nulla, minus atque? Pariatur suscipit sapiente
        exercitationem saepe. Totam obcaecati exercitationem corrupti asperiores
        libero nemo, iusto nam? In, repellat laboriosam vitae iure suscipit
        labore dolorem facilis nemo tenetur amet ea modi architecto dolores nam
        quod aut quisquam quia perferendis quas ab. Unde quo laborum molestias
        provident beatae aliquid excepturi, rerum soluta ipsum doloremque.
        Ducimus vitae, porro dolore, debitis distinctio minima reprehenderit ea
        facilis, natus laudantium rerum recusandae eum quo. Numquam dicta
        commodi ex fuga fugiat, eius sint accusamus impedit repudiandae atque
        aspernatur nihil esse quae repellendus veniam! Natus eos similique illum
        placeat, ipsam facilis exercitationem earum, quod officiis accusantium
        dolore labore expedita numquam repudiandae quam, ipsum soluta voluptatem
        porro. Aut commodi ratione animi eius, iste eligendi, optio maiores ea
        nesciunt neque iure ipsum voluptate error id, dicta unde dignissimos
        recusandae magni asperiores modi? Ipsa ratione consequatur perspiciatis?
        Non ex similique, perspiciatis, laborum nemo, suscipit eveniet provident
        id doloremque tempora labore praesentium dolores vel aspernatur libero
        dignissimos repudiandae eum veritatis doloribus commodi maiores
        molestias voluptate tempore. Neque tempora rem, dolores deserunt vitae
        pariatur aut, veritatis ipsa deleniti vero obcaecati culpa fugit hic.
        Est at incidunt quaerat fuga iusto, exercitationem consequuntur ex quod,
        vel nemo placeat enim ad accusamus labore delectus quidem optio dolores
        tempore eaque sed doloremque, quos atque eligendi voluptatum. Quae
        consequuntur iste id enim perferendis ut, accusamus voluptatibus odio
        numquam sed doloremque distinctio sint mollitia nemo similique itaque
        pariatur qui voluptatem ducimus possimus sapiente ipsam libero
        laboriosam illum? Maxime quaerat sed maiores tenetur deleniti eligendi
        obcaecati quasi vero, dolorum fugit rem minus possimus laudantium earum
        odio exercitationem, aut aliquam est suscipit excepturi iusto ex?
        Aliquam, modi amet. Quam obcaecati explicabo ea nostrum assumenda non
        officia animi tenetur distinctio cum repellat repellendus consequuntur
        illum alias dolores veritatis recusandae, voluptas fugit a molestiae
        numquam labore. Doloremque optio dolore eos molestiae, pariatur placeat,
        magni eveniet eaque non adipisci blanditiis, nam accusantium quibusdam
        iste iure amet? Deserunt sunt optio doloremque, rem soluta ipsam
        sapiente mollitia repellendus, libero cumque veritatis tempore odit
        officiis reprehenderit impedit ratione, sequi deleniti neque! Eum
        commodi a est iusto nihil totam impedit odit obcaecati esse sunt?
        Nesciunt blanditiis, atque iure ratione modi animi ipsum deleniti
        accusamus, culpa reprehenderit nemo sit, doloribus dolor cum hic
        quisquam deserunt esse possimus tenetur quo eaque dolores et vel. Iusto
        incidunt unde aliquam saepe! Unde, magnam! Sit libero optio quaerat
        magnam atque eius odio aliquid tempore obcaecati ab commodi rem
        deserunt, porro dolorum vel? Alias tempora esse, nesciunt molestias sint
        nemo nobis non. Asperiores cumque sequi dolorum incidunt maiores vel
        atque nihil ipsam similique odit. Ut officiis porro rem eos quisquam
        maiores ex modi exercitationem. Accusamus quod earum autem laborum
        laboriosam, ipsum consequuntur incidunt obcaecati. Eaque fugit harum
        eligendi omnis eum similique quidem ullam fuga possimus cupiditate
        voluptatem dignissimos, quas facere in voluptatibus ab! Maiores,
        voluptas dignissimos. Laudantium, obcaecati reprehenderit quisquam, at
        eligendi modi hic sunt, sequi totam mollitia nostrum aliquam distinctio
        vel impedit? Explicabo minus illo ut optio nobis, recusandae, voluptas,
        at eligendi quidem eos dolorem. Minima harum doloribus sapiente porro
        provident ipsa nemo rerum quod doloremque id obcaecati omnis labore
        sunt, nihil repellendus, itaque dolor deleniti, voluptatum pariatur
        tenetur cupiditate architecto. Soluta unde culpa quae possimus
        laudantium iste sequi officiis nesciunt error magnam asperiores eius
        eaque minima, dignissimos tenetur deserunt dolorum quod quo tempore.
      </p>
    </div>

    <!-- Fake modal -->
    <div
      v-if="showModal"
      class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-70"
      @click="closeModal"
    >
      <div class="bg-gray-50 rounded-lg w-1/2" @click.stop>
        <div class="flex flex-col items-start p-4 gap-2">
          <div class="flex items-center w-full">
            <div class="text-gray-900 font-semibold text-lg">
              <span role="img">🍪</span>Cookies
            </div>
            <svg
              class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              @click="closeModal"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
          <hr />
          <div class="text-gray-900">
            This website uses cookies to improve your user experience. By
            accepting them you will allow us to do so. You can simply close this
            modal to reject cookies.
          </div>
          <hr />
          <div class="ml-auto">
            <button
              class="mr-2 bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              @click="closeModal"
            >
              Close
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="closeModal"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScarePanel from '../components/ScarePanel.vue';
import { Howl } from 'howler';

export default {
  components: { ScarePanel },
  data: () => {
    return {
      jump: false,
      conn: null,
      settings: null,
      showModal: true,
    };
  },
  methods: {
    sendMessage(message) {
      this.conn.send(message);
    },
    closeModal() {
      this.showModal = false;
    },
  },
  inject: ['peer'],
  watch: {
    'peer.value'() {
      if (!this.peer.value) return;
      const peer = this.peer.value;
      this.conn = peer.connect(this.$route.params.id);
      this.conn.on('open', () => {
        this.conn.on('data', data => {
          if (data.fire) this.jump = true;
          else if (data.setup) this.settings = data.setup;
        });
      });
    },
  },
  mounted() {
    new Howl({ src: ['a.mp3'], preload: false }).once('unlock', () => {
      this.sendMessage({ unlocked: true });
    });
  },
};
</script>
