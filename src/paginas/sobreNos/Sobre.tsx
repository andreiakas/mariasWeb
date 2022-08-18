import React from "react";
import { Grid, Box, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Sobre.css'

function Sobre() {

      return (
            <Grid direction='column' justifyContent='center'>

                  <Grid container direction='row' justifyContent='center' alignItems='center'>

                        <Grid item xs={6} alignItems='center' >
                              <Box paddingX={20} >
                                    <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center'>Sobre Nós </Typography>
                              </Box>
                              <Box paddingX={15}>
                                    <Typography variant='h6' gutterBottom color='textPrimary' component='h6' align='center'><p>Projeto baseado na ODS 5 que diz respeito a igualdade de gênero e tem por objetivo acabar com a discriminação contra todas as mulheres e meninas.
                                          A Marias's Web é uma rede social direcionada para mulheres em que elas poderão compartilhar experiências positivas de situações que muitas mulheres já passaram ou estão passando, formando assim uma forte rede de apoio em que mulheres poderão se inspirar através de histórias de conquistas e superação.</p>

                                    </Typography>
                              </Box>
                        </Grid>

                        <Grid item xs={6} style={{
                              backgroundImage: `url(https://media.discordapp.net/attachments/993494998597255249/1008801937795334234/unknown.png?width=924&height=1068)`,
                              backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'

                        }}>
                        </Grid>

                  </Grid>


                  <Grid container className='equipe'>

                        <Grid item xs={12} alignItems='center' justifyContent='center' padding='50px' flexDirection='column'>

                              <Box>
                                    <Box paddingX={20} >
                                          <Typography variant='h3' gutterBottom color='textPrimary' component='h2' align='center'>
                                                Desenvolvedores
                                          </Typography>
                                    </Box>
                              </Box>
                        </Grid>

                        <Grid item xs={12} >
                              <Box className="equipe-contato1" >

                                    <Box className="contato-individual">

                                          <Box >
                                                <img className="foto-individual" src="" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                seu nome
                                          </Box>

                                          <Box className="profissao-individual">
                                                area que deseja
                                          </Box>

                                          <Box>
                                                <a href="https://www.facebook.com/Marias-Web-111470941659330/?ref=page_internal" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/marias_web/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/gustavocambui/mariasWeb" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>

                                    </Box>

                                    <Box className="contato-individual">
                                          <Box >
                                                <img className="foto-individual" src="" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                seu nome
                                          </Box>

                                          <Box className="profissao-individual">
                                                area que deseja
                                          </Box>
                                          <Box>
                                                <a href="https://www.facebook.com/Marias-Web-111470941659330/?ref=page_internal" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/marias_web/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/gustavocambui/mariasWeb" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>
                                    </Box>

                                    <Box className="contato-individual">
                                          <Box >
                                                <img className="foto-individual" src="" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                seu nome
                                          </Box>

                                          <Box className="profissao-individual">
                                                area que deseja
                                          </Box>

                                          <Box>
                                                <a href="https://www.facebook.com/Marias-Web-111470941659330/?ref=page_internal" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/marias_web/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/gustavocambui/mariasWeb" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>
                                    </Box>
                                    <Box className="contato-individual">
                                          <Box >
                                                <img className="foto-individual" src="" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                seu nome
                                          </Box>

                                          <Box className="profissao-individual">
                                                area que deseja
                                          </Box>

                                          <Box>
                                                <a href="https://www.facebook.com/Marias-Web-111470941659330/?ref=page_internal" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/marias_web/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/gustavocambui/mariasWeb" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>

                                    </Box>




                              </Box>



                        </Grid>

                        <Grid item xs={12} paddingTop={'30px'}>
                              <Box className="equipe-contato" >

                                    <Box className="contato-individual2">

                                          <Box >
                                                <img className="foto-individual" src="" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                seu nome
                                          </Box>

                                          <Box className="profissao-individual">
                                                area que deseja
                                          </Box>
                                          <Box>
                                                <a href="https://www.facebook.com/Marias-Web-111470941659330/?ref=page_internal" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/marias_web/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/gustavocambui/mariasWeb" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>

                                    </Box>

                                    <Box className="contato-individual2">
                                          <Box >
                                                <img className="foto-individual" src="https://media-exp1.licdn.com/dms/image/C4D03AQFM98ztSqf3vQ/profile-displayphoto-shrink_800_800/0/1659889423755?e=1666224000&v=beta&t=FkRPvD6Hd_93o1f79YGqJtxZMilKFqGRynULZQyumaA" alt="" width={'300px'} height={'300px'} />
                                          </Box>

                                          <Box className="nome-individual">

                                                Nathalia Cruz Santos
                                          </Box>

                                          <Box className="profissao-individual">
                                                Desenvolvedora Back-End
                                          </Box>

                                          <Box>
                                                <a href="https://www.linkedin.com/in/nathalia-cruz-6b1561238/" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/tthanalia/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/nathaliacrz" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>
                                    </Box>

                                    <Box className="contato-individual2">
                                          <Box >
                                                <img className="foto-individual" src="" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                seu nome
                                          </Box>

                                          <Box className="profissao-individual">
                                                area que deseja
                                          </Box>

                                          <Box>
                                                <a href="https://www.facebook.com/Marias-Web-111470941659330/?ref=page_internal" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/marias_web/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/gustavocambui/mariasWeb" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>
                                    </Box>




                              </Box>



                        </Grid>







                  </Grid>





            </Grid>
      )
}
export default Sobre;
