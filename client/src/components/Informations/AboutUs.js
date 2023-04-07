
import '../Informations/AboutUs.css';

export const AboutUs = () => {
    return(
        <section className="contact-container"> 

              <div className='contact-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas officiis ratione, eum hic iure enim. Assumenda, cupiditate facere? Dolorum quidem eaque tempora veniam provident labore dolores sapiente molestiae quod dolor?</p>
                <p className='email'>Email: monevpeter@gmail.com</p>
                <p className='phoneNumber'>Phone Number: 555-666</p>
              </div>

              <div className='container-google-maps'>
              <iframe width="100%" height="100%"   src="https://maps.google.com/maps?q=burgas&t=&z=14&ie=UTF8&iwloc=&output=embed"  
              title="Example Website"
                    loading="lazy"/>
              </div>
        </section>
    )
}