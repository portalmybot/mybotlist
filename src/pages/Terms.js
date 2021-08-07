import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Seo from '../components/common/Seo';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  title: {
    fontWeight: 700,
    marginTop: theme.spacing(1),
    
  },
  heroContent: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  titleUsers: {
    margin: theme.spacing(3, 0, 1)
  },
  alinks: {
    color: 'aqua'
  }
}));


const TosPage = () => {
  const classes = useStyles();

  return (
      <Layout>
        {
            <>
              <Seo 
                title='Términos de servicio — MyBOT List'
                description='Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team'
                url='https://portalmybot.com/list/tos'
                image='https://i.imgur.com/DC0Kp0D.png' />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>

                        <Container maxWidth="lg" component="main" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            Términos de servicio
                          </Typography>
                        </Container>
                        
                        <Container maxWidth="md" component="section">
                          <Typography variant="subtitle1" color="textSecondary" component="p">
                            ¡Gracias por usar PortalMyBOT! Estos términos de servicio describen las reglas y regulaciones para el uso del sitio web de PortalMyBOT (MyBOT List), ubicado en <a href="https://portalmybot.com/" className={classes.alinks}>https://portalmybot.com/</a>.<br/>
                            Al acceder al sitio web, acepta estos términos. 
                            No continúe utilizando PortalMyBOT si no está de acuerdo con los términos establecidos en esta página.
                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Definiciones
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            La siguiente terminología se aplica a estos Términos de servicio y Declaración de privacidad. <br/><br/>
                            "El Usuario", "Usted" y "Su" se refieren a la persona, empresa u organización que ha visitado o está utilizando el Sitio web o el Servicio. Un usuario debe tener al menos 13 años de edad. <br/><br/>
                            Todos los términos se refieren a la oferta, aceptación y consideración del pago necesario para llevar a cabo el proceso de nuestra asistencia al Usuario de la manera más adecuada con el propósito expreso de satisfacer las necesidades del Usuario con respecto a la prestación de los servicios declarados por la Compañía, en conforme y sujeto a la ley vigente de los Países Bajos.Cualquier uso de la terminología anterior u otras palabras en singular, plural, mayúsculas y/o él/ella o ellos, se toman como intercambiables y, por lo tanto, se refieren a los mismos.
                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Cuentas
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            El Usuario es el único responsable de mantener la confidencialidad de su cuenta y de restringir el acceso a su computadora. Acepta aceptar la responsabilidad de todas las actividades que se realicen en su cuenta. Usted reconoce que PortalMyBOT no es responsable del acceso de terceros a su cuenta que resulte del robo o apropiación indebida de su cuenta. PortalMyBOT y sus asociados se reservan el derecho de rechazar o cancelar el servicio, cancelar cuentas o eliminar o editar contenido a nuestro exclusivo criterio.

                            <br />
                            Usted acepta que cumple con los siguientes requisitos:
                            <ul>
                              <li>Debes ser humano. No se permiten cuentas registradas o mantenidas por "bots" u otros métodos automatizados.</li>
                              <li>Debes tener 13 años o más. Si nos enteramos de algún Usuario menor de 13 años, cancelaremos esa cuenta de inmediato. Si la edad mínima de su país es mayor, usted es responsable de cumplir con las leyes de su país.</li>
                              <li>Su inicio de sesión solo puede ser utilizado por una persona. No puede ceder ni transferir su cuenta a ninguna otra persona o entidad.</li>
                            </ul>
                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Contenido generado por el usuario
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            Los usuarios tienen la capacidad de publicar e intercambiar información en ciertas áreas del sitio web. PortalMyBOT no filtra, edita, publica ni revisa el contenido antes de su presencia en el sitio web. El contenido no reflejan los puntos de vista y opiniones de PortalMyBOT, sus agentes y/o afiliados. El contenido reflejan los puntos de vista y opiniones de la persona que publica sus puntos de vista y opiniones. En la medida en que lo permitan las leyes aplicables, PortalMyBOT no será responsable del contenido o cualquier responsabilidad, daños o gastos causados​​ y/o sufridos como resultado de cualquier uso y/o publicación y/o aparición del contenido en este sitio web.
                            <br /><br />
                            PortalMyBOT se reserva el derecho de monitorear el contenido y eliminar el contenido que puedan considerarse inapropiados, ofensivos o que incumplan estos Términos.
                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Política de infracción de derechos de autor
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            Si cree que el contenido de nuestro sitio web viola sus derechos de autor, comuníquese con nosotros de acuerdo con nuestra Política de la Ley de Derechos de Autor del Milenio Digital.Si usted es propietario de derechos de autor y cree que el contenido de PortalMyBOT viola sus derechos, comuníquese con nosotros enviando un correo electrónico a contacto@portalmybot.com. Antes de enviar una solicitud de eliminación, debe considerar los usos legales, como el uso legítimo y los usos con licencia.
                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Politica de reembolso
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            Para los planes de pago mensuales o anuales, el Servicio se factura por adelantado sobre una base mensual o anual respectivamente y no es reembolsable. No habrá reembolsos ni créditos por meses o servicios parciales, reembolsos por baja de categoría o reembolsos por meses no utilizados con una Cuenta abierta; sin embargo, el servicio permanecerá activo durante el período de facturación pagado. Usted puede cancelar su suscripción Premium en cualquier momento.
                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Propiedad intelectual
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            Se le otorga una licencia no exclusiva, intransferible y revocable para acceder y utilizar <a href="https://portalmybot.com/" className={classes.alinks}>https://portalmybot.com/</a> estrictamente de acuerdo con estos términos de uso. Como condición para el uso del Sitio, usted garantiza a PortalMyBOT que no utilizará el Sitio para ningún propósito que sea ilegal o esté prohibido por estos Términos. No puede usar el Sitio de ninguna manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el Sitio o interferir con el uso y disfrute del Sitio por parte de terceros. No puede obtener ni intentar obtener ningún material o información a través de ningún medio que no esté disponible o proporcionado intencionalmente a través del Sitio.

                            <br/><br/>
                            Todo el contenido incluido como parte del Servicio, como texto, gráficos, logotipos, imágenes, así como la compilación de los mismos, y cualquier software utilizado en el Sitio, es propiedad de PortalMyBOT o sus proveedores y está protegido por derechos de autor y otras leyes que proteger la propiedad intelectual y los derechos de propiedad. Usted acepta observar y cumplir con todos los avisos de derechos de autor y otros avisos de propiedad, leyendas u otras restricciones contenidas en dicho contenido y no realizará ningún cambio al mismo.

                            <br/><br/>
                            No modificará, publicará, transmitirá, aplicará ingeniería inversa, participará en la transferencia o venta, creará trabajos derivados ni explotará de ninguna manera el contenido, en su totalidad o en parte, que se encuentre en el Sitio.El contenido de PortalMyBOT no se puede revender.Su uso del Sitio no le da derecho a hacer ningún uso no autorizado de ningún contenido protegido y, en particular, no eliminará ni alterará ningún derecho de propiedad o avisos de atribución en ningún contenido.Utilizará contenido protegido únicamente para su uso personal y no hará ningún otro uso del contenido sin el permiso expreso por escrito de PortalMyBOT y el propietario de los derechos de autor. Usted acepta que no adquiere ningún derecho de propiedad sobre ningún contenido protegido. No le otorgamos ninguna licencia, expresa o implícita.
                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Responsabilidad
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            Usted comprende y acepta que no seremos responsables ante usted ni ante ningún tercero por ninguna pérdida de ganancias, uso, buena voluntad o datos, o por cualquier daño incidental, indirecto, especial, consecuente o ejemplar, como sea que surja, que resulte de:

                            <ul>
                              <li>El uso, divulgación o exhibición de su Contenido generado por el usuario.</li>
                              <li>Su uso o incapacidad para usar el Servicio.</li>
                              <li>Cualquier modificación, cambio de precio, suspensión o interrupción del Servicio.</li>
                              <li>El servicio en general o el software o los sistemas que hacen que el Servicio esté disponible.</li>
                              <li>Acceso no autorizado o alteraciones de sus transmisiones o datos.</li>
                              <li>Declaraciones o conducta de terceros en el Servicio.</li>
                              <li>Cualquier otra interacción de usuario que ingrese o reciba a través de su uso del Servicio.</li>
                              <li>Cualquier otro asunto relacionado con el Servicio.</li>
                              
                            </ul>
                            Nuestra responsabilidad es limitada ya sea que se nos haya informado o no de la posibilidad de tales daños, e incluso si se determina que un recurso establecido en este Acuerdo no ha cumplido con su propósito esencial.No tendremos ninguna responsabilidad por cualquier falla o retraso debido a asuntos fuera de nuestro control razonable.

                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Cambios en los términos
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            Nos reservamos el derecho, a nuestro exclusivo criterio, de modificar estos Términos de servicio en cualquier momento. Su uso continuado del sitio web constituye su aceptación de nuestras revisiones de estos Términos de servicio.
                            <br />
                            Nos reservamos el derecho, en cualquier momento y de vez en cuando, de modificar o interrumpir, temporal o permanentemente, el sitio web(o cualquier parte del mismo) con o sin previo aviso.
                          </Typography>
                          
                        </Container>
                        
                      </Grid>
                      
                  </div>
                 
              </Container>
            </>
          
        }
      </Layout>
  )
};

export default TosPage;


