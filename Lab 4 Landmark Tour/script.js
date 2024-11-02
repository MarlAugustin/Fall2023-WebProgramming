var current_location;
function swapImage(img)
{
    // This function will use the img.value to update the current_img.src.
    var selected_image = img.value;
    var current_img = document.getElementById("current_img");
    if(selected_image == "niagara")
    {
        current_img.src = "images/Niagara_falls.jpg";
        current_img.value = "niagara";
        current_location = "Niagara+Falls,+ON,+Canada/";
    }
    else if(selected_image == "citadel")
    {
        current_img.src = "images/Citadelle_Laferrière.jpg";
        current_img.value = "citadel";
        current_location = "Laferriere+Citadel/";
    }
    else if(selected_image == "wall_of_china")
    {
        current_img.src = "images/great_wall_of_china.jpg";
        current_img.value = "wall_of_china";
        current_location = "Great+Wall+of+China,+District+de+Huairou,+Chine/";
    }
    else if(selected_image == "pyramid_of_giza"){
        current_img.src = "images/pyramid_of_giza.jpg";
        current_img.value = "pyramid_of_giza";
        current_location = "The+Great+Pyramid+of+Giza/";

    }
    landmarkLocationsUsingMaps();
    imageDescription(selected_image);
}

function updateImageSize()
{
    // This function will use the size_menu.value to update the size of the image.
    var selected_size = document.getElementById("size_menu").value;
    var current_img = document.getElementById("current_img");
    if(selected_size != "")
    {
        current_img.style.width = ""+selected_size+"%";
        current_img.style.height = ""+selected_size+"%";
    }
}

function imageDescription(selected_image)
{
    // This function will use the current_img.value to display the description of the landmark.
    var current_img_description = document.getElementById("current_img_description");
    if(selected_image == "niagara")
    {
        current_img_description.innerHTML = "<p>Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, between the Canadian province of Ontario and the US state of New York. The largest is Horseshoe Falls, also known as Canadian Falls, which straddles the international border between Canada and the United States. The smaller American Falls and Bridal Veil Falls lie entirely within the United States. Bridal Veil Falls are separated from Horseshoe Falls by Goat Island and from American Falls by Luna Island.</p>";
    }
    else if(selected_image == "citadel")
    {
        current_img_description.innerHTML = "<p>The Citadelle was commissioned in 1805 by Henri Christophe and completed in 1820. THis wonder has become the symbol of Haiti’s power and independence. Designated by UNESCO as a World Heritage Site in 1982.</p>";
    }
    else if(selected_image == "wall_of_china")
    {
        current_img_description.innerHTML = "<p>The great wall of china was commissioned in 220 B.C., under Qin Shi Huang, sections of earlier fortifications were joined together to form a united defence system against invasions from the north. It was finished in the 17h century. It has a length of 20 000 km</p>";
    }
    else if(selected_image == "pyramid_of_giza"){
        current_img_description.innerHTML = "<p>The Great Pyramid of Giza[a] is the largest Egyptian pyramid and served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom. Built in the early 26th century BC, over a period of about 27 years,[3] the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact</p>";
    }
}

function landmarkLocationsUsingMaps()
{
    // This function will use the current_img.value to display the location of the landmark using Google Maps.
    var landmarkLocation = document.getElementById("landmark_location");
    var current_img = document.getElementById("current_img").value;
    if(current_img == "niagara")
    {
        landmarkLocation.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186586.3297946094!2d-79.25284282609324!3d43.05381425762716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3445eec824db9%3A0x46d2c56156bda288!2sNiagara%20Falls%2C%20ON%2C%20Canada!5e0!3m2!1sfr!2sus!4v1695830418100!5m2!1sfr!2sus";
    }
    else if(current_img == "citadel")
    {
        landmarkLocation.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7244.2432505216775!2d-72.2423350833469!3d19.572857874852787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb6dc7dee232767%3A0xefeece7122c3742c!2sLaferriere%20Citadel!5e0!3m2!1sen!2sus!4v1695830431638!5m2!1sen!2sus";
    }
    else if(current_img == "wall_of_china")
    {
        landmarkLocation.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8774.306928199085!2d116.56914719546837!3d40.431602396171115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d7687f2ccf%3A0xd040259b950522df!2sGrande%20Muraille!5e0!3m2!1sfr!2sus!4v1695830477338!5m2!1sfr!2sus";
    }
    else if(current_img == "pyramid_of_giza"){
        landmarkLocation.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0090303975658!2d31.131629675455137!3d29.979170474956543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sThe%20Great%20Pyramid%20of%20Giza!5e0!3m2!1sen!2sus!4v1695830258855!5m2!1sen!2sus";
    }
}

function onLoadingPage()
{
    current_img = document.getElementById("current_img");
    current_img.src="images/Citadelle_Laferrière.jpg";
    current_img.value="citadel";
    current_location = "Laferriere+Citadel/";
    imageDescription(current_img.value);
    onImageMouseOut();
    landmarkLocationsUsingMaps();
}

function onImageMouseOver()
{
    var current_img_description = document.getElementById("current_img_description");
    current_img_description.style.display = "block";
}

function onImageMouseOut()
{
    var current_img_description = document.getElementById("current_img_description");
    current_img_description.style.display = "none";
}

function directions()
{
    var directions_from = document.getElementById("directions_from").value;
    link_for_landmark_directions = document.getElementById("landmark_directions");
    url = "https://www.google.com/maps/dir/"+directions_from+"/"+current_location;
    link_for_landmark_directions.innerHTML = "<a href='"+url+"' target='_blank'>Get Directions</a>";
}