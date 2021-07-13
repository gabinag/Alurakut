
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}


export default function Home() {

  const usuario = 'gabinag';
    const pessoasFavoritas = [
      'ericnag',
      'rafaballerini',
      'marcobrunodev',
      'filipedeschamps',
      'juunegreiros',
      'omariosouto'
    ]

  return (
  <>  
    <AlurakutMenu />  
    <MainGrid>
      <div className= "profileArea" style= {{ gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={usuario} />
      </div>

      <div className="welcomeArea" style= {{ gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
            Bem vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subtitle">O que você deseja fazer?</h2>
          <form>
            <div>
              <input
                placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
              />
            </div>
            <div>
              <input
                placeholder="Coloque uma url para usarmos de capa"
                name="image"
                aria-label="Coloque uma url para usarmos de capa"
              />
            </div>

            <button>
              Criar Comunidade
            </button>

          </form>
        </Box>
      </div>


      <div className="profileRelationsArea" style= {{ gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>

          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
       
      </div>
    </MainGrid>
  </>
  
    )
  
}
