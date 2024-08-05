    //Declare variables
    var buyOptions = "";
    var priceOptions = "";
    var computerOptions = "";
    var osOptions = "";
    var otherOptions = "";
    var outputLink = "";
    var outputImage = "";
    var outputDescription = ""; 
    
    var motherboardOutput = "";
    var powerOutput = "";
    var hdOutput = "";
    var ramOutput = "";
    var cpuOutput = "";
    var coolerOutput = "";
    var caseOutput = "";
    var fanOutput = "";

    var useOptions = "";
    var qualityOptions = "";
    var storageOptions = "";

    const buyClass = document.getElementsByClassName("buy_class");
    const otherClass = document.getElementsByClassName("other_class");
    const buildClass = document.getElementsByClassName("build_class");

    //Run this as the website loads.
    function loadFunction()
    {
        var footerString = document.getElementById("footer_id");
        footerString.innerHTML = "Copyright &copy;2023 Clancy Schwegmann. All Rights Reserved. <br><br> Contact: clancyschwegmann@gmail.com <br><br> Last Modified:    " + document.lastModified;
    }
  
    function CalculateResults()
    {

    if(document.getElementById("form_desktop").checked)
    {
        computerOptions = "Desktop";
    }
    else if(document.getElementById("form_laptop").checked)
    {
        computerOptions = "Laptop";
    }

    if(document.getElementById("form_price").checked)
    {
        otherOptions = "Price";
    }
    else if(document.getElementById("form_performance").checked)
    {
        otherOptions = "Performance";
    }

    if(document.getElementById("form_buy").checked)
    {
        buyOptions = "Buy";
    }
    else if(document.getElementById("form_build").checked)
    {
        buyOptions = "Build";
    }

    if(document.getElementById("form_macos").checked)
    {
        osOptions = "Mac";
    }
    else if(document.getElementById("form_windows").checked)
    {
        osOptions = "Windows";
    }



    if(document.getElementById("form_750").checked)
    {
        priceOptions = "750";
    }
    else if(document.getElementById("form_1000").checked)
    {
        priceOptions = "1000";
    }
    else if(document.getElementById("form_1500").checked)
    {
        priceOptions = "1500";
    }

    if(document.getElementById("form_simple").checked)
    {
        useOptions = "Simple";
    }
    else if(document.getElementById("form_gaming").checked)
    {
        useOptions = "Gaming";
    }

    if(document.getElementById("form_small").checked)
    {
        storageOptions = "Small";
    }
    else if(document.getElementById("form_medium").checked)
    {
        storageOptions = "Medium";
    }
    else if(document.getElementById("form_large").checked)
    {
        storageOptions = "Large";
    }

    if(document.getElementById("form_price2").checked)
    {
        qualityOptions = "Price";
    }
    else if(document.getElementById("form_performance2").checked)
    {
        qualityOptions = "Performance";
    }

    //Check if all items are checked.

    if(computerOptions != "")
    {

    }
    else
    {
        alert("Error! make sure all items are checked.")
        return;
    }
    
    if(computerOptions == "Laptop")
    {
        if(priceOptions != "" && osOptions != "" && otherOptions != "")
        {

        }
        else
        {
            alert("Error! make sure all items are checked.")
            return;
        }
    }

    if(computerOptions == "Desktop")
    {
        if(buyOptions != "")
        {

        }
        else
        {
            alert("Error! make sure all items are checked.")
            return;   
        }
    }

    if(computerOptions == "Desktop" && buyOptions == "Buy")
    {
        if(priceOptions != "" && osOptions != "" && otherOptions != "")
        {

        }
        else
        {
            alert("Error! make sure all items are checked.")
            return;
        }
    }

    if(computerOptions == "Desktop" && buyOptions == "Build")
    {
        if(useOptions != "" && storageOptions != "" && qualityOptions != "")
        {

        }
        else
        {
            alert("Error! make sure all items are checked.")
            return;
        }
    }

    //Buy

    //Mac Laptop

    if(osOptions == "Mac" && priceOptions == "750" && computerOptions == "Laptop" && otherOptions == "Price")
    {
        outputLink = "https://www.amazon.com/Flagship-HP-Chromebook-Processor-11A-NB0013DX/dp/B08D3X9RF6/ref=sr_1_5?crid=XB3SUZCIM2V5&keywords=chromebook&qid=1682415947&s=electronics&sprefix=chrome%2Celectronics%2C139&sr=1-5&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0";
        outputDescription = "Based on the feedback, we have calculated that this Chromebook would be an excellent choice for your next computer! One interesting thing about Chromebooks is that, while they are limited in capabilities from the start, they can be turned into a linux which allows you to make the most out of this very cheap system.";
        outputImage = "chromebook.jpg";
    }

    if(osOptions == "Mac" && priceOptions == "750" && computerOptions == "Laptop" && otherOptions == "Performance")
    {
        outputLink = "https://www.newegg.com/p/N82E16834096403";
        outputDescription = "Based on the feedback, we have calculated that this Apple Macbook Pro would be an excellent choice for your next computer!";
        outputImage = "macbook_pro.jpg";
    }

    if(osOptions == "Mac" && priceOptions == "1000" && computerOptions == "Laptop" && otherOptions == "Price")
    {
        outputLink = "https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5KWB9H/ref=sr_1_3?crid=21V1SJ2ZDVHQD&keywords=apple%2Blaptop%2Bnew&qid=1682413310&sprefix=apple%2Blaptop%2Bnew%2Caps%2C148&sr=8-3&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf&th=1";
        outputDescription = "Based on the feedback, we have calculated that this Apple Macbook Air would be an excellent choice for your next computer!";
        outputImage = "macbook_air.jpg";
    }

    if(osOptions == "Mac" && priceOptions == "1000" && computerOptions == "Laptop" && otherOptions == "Performance")
    {
        outputLink = "https://www.amazon.com/Apple-MacBook-14-inch-8%E2%80%91core-14%E2%80%91core/dp/B09PGSZDHH/ref=sr_1_5?crid=3MIP5P8U7XKDG&keywords=apple%2Blaptop%2Bnew&qid=1682413456&refinements=p_36%3A2421891011&rnid=2421885011&s=pc&sprefix=apple%2Blaptop%2Bnew%2Caps%2C257&sr=1-5&th=1";
        outputDescription = "Based on the feedback, we have calculated that this Apple Macbook Pro would be an excellent choice for your next computer!";
        outputImage = "macbook_pro.jpg";
    }

    if(osOptions == "Mac" && priceOptions == "1500" && computerOptions == "Laptop" && otherOptions == "Price")
    {
        outputLink = "https://www.amazon.com/Late-Apple-MacBookPro-Silver-Renewed/dp/B09Q4GQRXZ/ref=sr_1_4?crid=357304HTWJPPZ&keywords=mac+laptop&qid=1682414658&refinements=p_36%3A150000-&rnid=386442011&s=electronics&sprefix=mac+lapto%2Celectronics%2C129&sr=1-4";
        outputDescription = "Based on the feedback, we have calculated that this Apple Macbook Pro would be an excellent choice for your next computer!";
        outputImage = "macbook_pro.jpg";
    }

    if(osOptions == "Mac" && priceOptions == "1500" && computerOptions == "Laptop" && otherOptions == "Performance")
    {
        outputLink = "https://www.apple.com/macbook-pro-14-and-16/";
        outputDescription = "Based on the feedback, we have calculated that this Apple Macbook Pro would be an excellent choice for your next computer!";
        outputImage = "macbook_pro.jpg";
    }

    //Windows Laptop

    if(osOptions == "Windows" && priceOptions == "750" && computerOptions == "Laptop" && otherOptions == "Price")
    {
        outputLink = "https://www.amazon.com/Lenovo-Dual-core-Processor-Anti-Glare-Accessories/dp/B0BZV2SYZH/ref=sr_1_1_sspa?crid=1K8XZ7RRYGG8U&keywords=windows%2Blaptop&qid=1682416938&refinements=p_36%3A-75000&rnid=386442011&s=electronics&sprefix=windows%2Blapto%2Celectronics%2C181&sr=1-1-spons&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFpaSkxEQUNMTzdVJmVuY3J5cHRlZElkPUEwNzIzMTkwUVlaV1VTUUI3UkJIJmVuY3J5cHRlZEFkSWQ9QTAwOTcyNjU5VVRPSERUMUhJRkomd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1";
        outputDescription = "Based on the feedback, we have calculated that the Lenovo IdeaPad would be an excellent choice for your next computer! The IdeaPad is a relatively cheap Windows laptop with gaming capabilities and decent performance.";
        outputImage = "windows_dell_laptop.jpg";
    }

    if(osOptions == "Windows" && priceOptions == "750" && computerOptions == "Laptop" && otherOptions == "Performance")
    {
        outputLink = "https://www.amazon.com/Acer-AN515-57-79TD-i7-11800H-GeForce-Keyboard/dp/B09R65RN43/ref=sr_1_12_sspa?crid=3E7B38AED3X7Y&keywords=windows%2Blaptop%2Bgaming&qid=1682445317&refinements=p_36%3A-75000&rnid=386442011&s=electronics&sprefix=windows%2Blaptop%2Bgamin%2Celectronics%2C313&sr=1-12-spons&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRlJWVUFWODk1Wk1TJmVuY3J5cHRlZElkPUEwMDEzMDAxV0U2NENCVjMwNzZJJmVuY3J5cHRlZEFkSWQ9QTA2NDI0MDUxSTVQTDVHSzhFNE82JndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1";
        outputDescription = "Based on the feedback, we have calculated that this brand new Acer Nitro 5 gaming laptop would be an excellent choice for your next computer!";
        outputImage = "windows_gaming_laptop.jpg";
    }

    if(osOptions == "Windows" && priceOptions == "1000" && computerOptions == "Laptop" && otherOptions == "Price")
    {
        outputLink = "https://www.bestbuy.com/site/dell-inspiron-2-in-1-14-fhd-touch-laptop-12th-gen-intel-core-i7-16gb-memory-512gb-ssd-platinum-silver/6504381.p?skuId=6504381";
        outputDescription = "Based on the feedback, we have calculated that this Dell inspiron 2-in-1 would be an excellent choice for your next computer!";
        outputImage = "windows_dell_laptop.jpg";
    }

    if(osOptions == "Windows" && priceOptions == "1000" && computerOptions == "Laptop" && otherOptions == "Performance")
    {
        outputLink = "https://www.microsoft.com/en-us/d/surface-laptop-5/8XN49V61S1BN/G0D3?activetab=pivot:overviewtab";
        outputDescription = "Based on the feedback, we have calculated that this Microsoft Surface Laptop would be an excellent choice for your next computer!";
        outputImage = "windows_dell_laptop.jpg";
    }

    if(osOptions == "Windows" && priceOptions == "1500" && computerOptions == "Laptop" && otherOptions == "Price")
    {
        outputLink = "https://www.newegg.com/silver-hp-elitebook-1040-g9-i71255u/p/N82E16834841071?Description=windows%20laptop&cm_re=windows_laptop-_-34-841-071-_-Product";
        outputDescription = "Based on the feedback, we have calculated that the HP Elitebook would be an excellent choice for your next computer!";
        outputImage = "windows_dell_laptop.jpg";
    }

    if(osOptions == "Windows" && priceOptions == "1500" && computerOptions == "Laptop" && otherOptions == "Performance")
    {
        outputLink = "https://www.amazon.com/MSI-i9-12900H-GeForce-Thunberbolt4-Titanium/dp/B0BPLXMYLN/ref=sr_1_10?crid=3S3G2FB76TU6I&keywords=windows%2Blaptop&qid=1682447668&refinements=p_36%3A150000-&rnid=386442011&s=electronics&sprefix=windows%2Blaptop%2Celectronics%2C392&sr=1-10&ufe=app_do%3Aamzn1.fos.17f26c18-b61b-4ce9-8a28-de351f41cffb&th=1";
        outputDescription = "Based on the feedback, we have calculated that the MSI Raider laptop would be an excellent choice for your next computer!";
        outputImage = "windows_gaming_laptop.jpg";
    }

    //Mac Desktop

    if(buyOptions == "Buy" && osOptions == "Mac" && priceOptions == "750" && computerOptions == "Desktop" && otherOptions == "Price")
    {
        outputLink = "https://www.amazon.com/Apple-2-7GHz-ME086LL-Desktop-Refurbished/dp/B07CBFHR52/ref=sr_1_3?crid=2R5PVB9ASO8PP&keywords=imac&qid=1682450695&refinements=p_36%3A-50000&rnid=386442011&s=electronics&sprefix=imac%2Celectronics%2C230&sr=1-3";
        outputDescription = "Based on the feedback, we have calculated that this Apple iMac would be an excellent choice for your next computer!";
        outputImage = "imac.jpg";
    }

    if(buyOptions == "Buy" && osOptions == "Mac" && priceOptions == "750" && computerOptions == "Desktop" && otherOptions == "Performance")
    {
        outputLink = "https://www.apple.com/mac-mini/";
        outputDescription = "Based on the feedback, we have calculated that the Mac Mini would be an excellent choice for your next computer! Miniature PC's are becoming more popular and are essentially just tiny desktops, or you can also think of it like an iMac but without the monitor. The Mac Mini has Apple's M2 chip as well which is a very fast CPU.";
        outputImage = "mac_mini.jpg";
    }

    if(buyOptions == "Buy" && osOptions == "Mac" && priceOptions == "1000" && computerOptions == "Desktop" && otherOptions == "Price")
    {
        outputLink = "https://www.amazon.com/Apple-27-inch-Storage-Previous-Renewed/dp/B08H2B8NCY/ref=sr_1_10?crid=RM8XKJFOVBA1&keywords=mac&qid=1682460550&refinements=p_36%3A75000-100000&rnid=386442011&s=electronics&sprefix=mac%2Celectronics%2C174&sr=1-10&th=1";
        outputDescription = "Based on the feedback, we have calculated that the Apple iMac would be an excellent choice for your next computer!";
        outputImage = "imac.jpg";
    }

    if(buyOptions == "Buy" && osOptions == "Mac" && priceOptions == "1000" && computerOptions == "Desktop" && otherOptions == "Performance")
    {
        outputLink = "https://www.apple.com/imac-24/";
        outputDescription = "Based on the feedback, we have calculated that the Apple iMac would be an excellent choice for your next computer!";
        outputImage = "imac.jpg";
    }

    if(buyOptions == "Buy" && osOptions == "Mac" && priceOptions == "1500" && computerOptions == "Desktop" && otherOptions == "Price")
    {
        outputLink = "https://www.amazon.com/2021-Apple-24-inch-8%E2%80%91core-512GB/dp/B09327H62Y/ref=sr_1_6?crid=RM8XKJFOVBA1&keywords=mac&qid=1682460457&refinements=p_36%3A150000-&rnid=386442011&s=electronics&sprefix=mac%2Celectronics%2C174&sr=1-6&ufe=app_do%3Aamzn1.fos.17f26c18-b61b-4ce9-8a28-de351f41cffb&th=1";
        outputDescription = "Based on the feedback, we have calculated that the Apple iMac would be an excellent choice for your next computer!";
        outputImage = "imac.jpg";
    }

    if(buyOptions == "Buy" && osOptions == "Mac" && priceOptions == "1500" && computerOptions == "Desktop" && otherOptions == "Performance")
    {
        outputLink = "https://www.apple.com/mac-studio/";
        outputDescription = "Based on the feedback, we have calculated that the Mac Studio would be an excellent choice for your next computer!";
        outputImage = "mac_mini.jpg";
    }

        //Windows Desktop

        if(buyOptions == "Buy" && osOptions == "Windows" && priceOptions == "750" && computerOptions == "Desktop" && otherOptions == "Price")
        {
            outputLink = "https://www.amazon.com/KAMRUI-GK3-2-5-inch-Ethernet-Business/dp/B0BC7S9R5C/ref=sr_1_5?crid=2O8H4GHZW9KL6&keywords=windows%2Bdesktop&qid=1682461561&s=electronics&sprefix=windows%2Bdeskto%2Celectronics%2C182&sr=1-5&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&th=1";
            outputDescription = "Based on the feedback, we have calculated that the Kamrui Mini PC would be an excellent choice for your next computer!";
            outputImage = "windows_mini.jpg";
        }
    
        if(buyOptions == "Buy" && osOptions == "Windows" && priceOptions == "750" && computerOptions == "Desktop" && otherOptions == "Performance")
        {
            outputLink = "https://www.newegg.com/dell-optiplex-3090-student-home-office/p/1VK-0001-67MC1?Description=windows%20desktop&cm_re=windows_desktop-_-9SIAA0SJEN5259-_-Product&quicklink=true";
            outputDescription = "Based on the feedback, we have calculated that the dell optiplex 3090 would be an excellent choice for your next computer!";
            outputImage = "windows_desktop.jpg";
        }
    
        if(buyOptions == "Buy" && osOptions == "Windows" && priceOptions == "1000" && computerOptions == "Desktop" && otherOptions == "Price")
        {
            outputLink = "https://www.bestbuy.com/site/hp-envy-desktop-intel-core-i7-16gb-memory-1tb-ssd-black/6498473.p?skuId=6498473";
            outputDescription = "Based on the feedback, we have calculated that this HP envy desktop would be an excellent choice for your next computer!";
            outputImage = "windows_desktop.jpg";
        }
    
        if(buyOptions == "Buy" && osOptions == "Windows" && priceOptions == "1000" && computerOptions == "Desktop" && otherOptions == "Performance")
        {
            outputLink = "https://www.dell.com/en-us/shop/desktop-computers/xps-desktop/spd/xps-8950-desktop/xd8950fubfh";
            outputDescription = "Based on the feedback, we have calculated that the Dell XPS would be an excellent choice for your next computer!";
            outputImage = "windows_desktop.jpg";
        }
    
        if(buyOptions == "Buy" && osOptions == "Windows" && priceOptions == "1500" && computerOptions == "Desktop" && otherOptions == "Price")
        {
            outputLink = "https://www.newegg.com/p/3D5-001U-001D5?Description=windows%20desktops&cm_re=windows_desktops-_-3D5-001U-001D5-_-Product&quicklink=true";
            outputDescription = "Based on the feedback, we have calculated that the IPASON gaming PC would be an excellent choice for your next computer!";
            outputImage = "windows_gaming_desktop.jpg";
        }
    
        if(buyOptions == "Buy" && osOptions == "Windows" && priceOptions == "1500" && computerOptions == "Desktop" && otherOptions == "Performance")
        {
            outputLink = "https://www.amazon.com/Alienware-Aurora-Liquid-Cooled-Desktop/dp/B09NLDMKVR/ref=sr_1_2_sspa?crid=3SPVQWBQFWYKL&keywords=desktop%2Bcomputer&qid=1682465622&refinements=p_36%3A200000-&rnid=386442011&s=electronics&sprefix=desktop%2Bcompute%2Celectronics%2C157&sr=1-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNVhINUExR1JEUThDJmVuY3J5cHRlZElkPUEwMjY5MjAwSTNJT1Q1S0dBNDlYJmVuY3J5cHRlZEFkSWQ9QTEwNDY0OTUyVUpQNEZLQTkwWVJDJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1";
            outputDescription = "Based on the feedback, we have calculated that the Alienware Aurora Liquid Cooled Desktop would be an excellent choice for your next computer!";
            outputImage = "windows_gaming_desktop.jpg";
        }

        if(buyOptions == "Build" && computerOptions == "Desktop")
        {
            if(useOptions == "Simple")
            {
                motherboardOutput = "https://www.newegg.com/p/N82E16813145372?Item=N82E16813145372&Description=motherboard&cm_re=motherboard-_-13-145-372-_-Product";
                powerOutput = "https://www.newegg.com/fsp-group-dagger-pro-series-sda2-650-650w/p/1HU-0095-000G7";
                ramOutput = "https://www.newegg.com/team-16gb-288-pin-ddr4-sdram/p/N82E16820331354?Description=ddr4%20ram&cm_re=ddr4_ram-_-20-331-354-_-Product";
                cpuOutput = "https://www.newegg.com/intel-core-i5-3rd-gen-core-i5-3470/p/N82E16819115234?Description=lga%201155%20cpu&cm_re=lga_1155%20cpu-_-19-115-234-_-Product";
                coolerOutput = "https://www.newegg.com/intel-e97379-001/p/27J-000E-00032?Description=i5%20cpu%20cooler&cm_re=i5_cpu%20cooler-_-27J-000E-00032-_-Product";
                graphicsOutput = "https://www.amazon.com/Gigabyte-Video-Graphics-GV-N710D3-2GL-REV2-0/dp/B01IEO05NU/ref=asc_df_B01IEO05NU/?tag=hyprod-20&linkCode=df0&hvadid=309773039951&hvpos=&hvnetw=g&hvrand=8084143094217587613&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028713&hvtargid=pla-379035537733&th=1";
                caseOutput = "https://www.newegg.com/p/N82E16811352203?Description=computer%20case%20matx&cm_re=computer_case%20matx-_-11-352-203-_-Product";
                fanOutput = "https://www.amazon.com/uphere-3-Pack-Computer-120mm-Cooling/dp/B072LDYKQ6/ref=sr_1_11?crid=MIS33R40NV5Y&keywords=intake%2Bcase%2Bfan&qid=1682543995&sprefix=intake%2Bcase%2Bfan%2Caps%2C191&sr=8-11&th=1";
            
                if(storageOptions == "Small")
                {
                    hdOutput = "https://www.amazon.com/WESTERN-DIGITAL-WD2500AAKX-Caviar-internal/dp/B00EGSGDXK/ref=sr_1_5?keywords=250+gb+hdd&qid=1682578805&s=electronics&sr=1-5";
                }
                else if(storageOptions == "Medium")
                {
                    hdOutput = "https://www.newegg.com/seagate-barracuda-st500dm009-500gb/p/N82E16822179011?Description=500%20gb%20hdd&cm_re=500_gb%20hdd-_-22-179-011-_-Product&quicklink=true";
                }
                else if(storageOptions == "Large")
                {
                    hdOutput = "https://www.amazon.com/WD-Blue-1TB-Hard-Drive/dp/B0088PUEPK/ref=sr_1_3?crid=17FUCRJRMGOLV&keywords=1tb%2Bhdd&qid=1682579022&s=electronics&sprefix=1tb%2Bhdd%2Celectronics%2C133&sr=1-3&th=1";
                }
                if(qualityOptions == "Price")
                {
                    caseOutput = "https://www.newegg.com/p/2AM-006A-000C4?Description=computer%20case%20matx&cm_re=computer_case%20matx-_-9SIAY3SJTA9704-_-Product";
                    motherboardOutput = "https://www.newegg.com/p/1JW-00N7-00005?Item=9SIB601GS58583&Description=motherboard&cm_re=motherboard-_-9SIB601GS58583-_-Product&quicklink=true";
                }
            }
            else
            {
                motherboardOutput = "https://www.amazon.com/GIGABYTE-B650M-Micro-ATX-Warranty-Motherboard/dp/B0BH6XND27/ref=sr_1_1?keywords=micro%2Batx%2Bam5%2Bmotherboard&qid=1682593145&s=electronics&sprefix=micro%2Batx%2Bam5%2Bmo%2Celectronics%2C192&sr=1-1&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&th=1";
                powerOutput = "https://www.newegg.com/p/1HU-0095-000S8?Description=matx%20power%20supply&cm_re=matx_power%20supply-_-9SIABP9EWE9184-_-Product&quicklink=true";
                ramOutput = "https://www.newegg.com/g-skill-32gb-288-pin-ddr5-sdram/p/N82E16820374348?Description=ddr5%20ram&cm_re=ddr5_ram-_-20-374-348-_-Product";
                cpuOutput = "https://www.newegg.com/amd-ryzen-9-7950x-ryzen-9-7000-series/p/N82E16819113771?Description=ryzen%207000&cm_re=ryzen_7000-_-19-113-771-_-Product&quicklink=true";
                coolerOutput = "https://www.newegg.com/enermax-ets-f40-bk-argb/p/N82E16835214110?Description=am5%20cooler&cm_re=am5_cooler-_-35-214-110-_-Product";
                graphicsOutput = "https://www.amazon.com/ZOTAC-GeForce-Graphics-IceStorm-ZT-A30600H-10M/dp/B08W8DGK3X/ref=sr_1_3?crid=1FVRFJ1G19R6S&keywords=am5+graphics+card&qid=1682568705&s=electronics&sprefix=amd+graphics+card%2Celectronics%2C183&sr=1-3&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3";
                caseOutput = "https://www.newegg.com/jonsbo-d31-micro-atx-mid-tower/p/2AM-006A-000B9?Description=computer%20case%20matx&cm_re=computer_case%20matx-_-2AM-006A-000B9-_-Product";
                fanOutput = "https://www.amazon.com/CONISY-120mm-Desktop-Computer-Cooling/dp/B084Z3YZGZ/ref=sr_1_15?crid=MIS33R40NV5Y&keywords=intake%2Bcase%2Bfan&qid=1682543995&sprefix=intake%2Bcase%2Bfan%2Caps%2C191&sr=8-15&th=1";
                

                if(storageOptions == "Small")
                {
                    hdOutput = "https://www.amazon.com/SAMSUNG-Inch-Internal-MZ-77E1T0B-AM/dp/B08QBJ2YMG/ref=sr_1_3?crid=GB6FKGVFZXI9&keywords=1tb%2Bssd&qid=1682593501&s=electronics&sprefix=1tb%2Bss%2Celectronics%2C156&sr=1-3&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&th=1";
                }
                else if(storageOptions == "Medium")
                {
                    hdOutput = "https://www.amazon.com/Silicon-Power-Performance-Internal-SP002TBSS3A55S25/dp/B07Q37V1C9/ref=sr_1_4?keywords=2tb%2Bssd&qid=1682579420&s=electronics&sr=1-4&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&th=1 ";
                }
                else if(storageOptions == "Large")
                {
                    hdOutput = "https://www.newegg.com/western-digital-blue-4tb/p/N82E16820250121?Description=4tb%20ssd&cm_re=4tb_ssd-_-20-250-121-_-Product";
                }

                if(qualityOptions == "Price")
                {
                    motherboardOutput = "https://www.newegg.com/asus-prime-b450m-a-ii/p/N82E16813119355?Description=am4%20motherboard&cm_re=am4_motherboard-_-13-119-355-_-Product&quicklink=true";
                    cpuOutput = "https://www.newegg.com/amd-ryzen-5-5600x/p/N82E16819113666?Description=ryzen%205%20am4%20socket&cm_re=ryzen_5%20am4%20socket-_-19-113-666-_-Product&quicklink=true";
                    powerOutput = "https://www.newegg.com/p/1HU-0095-000S7";
                    ramOutput = "https://www.newegg.com/g-skill-32gb-288-pin-ddr4-sdram/p/N82E16820232920?Description=ddr4%20ram&cm_re=ddr4_ram-_-20-232-920-_-Product&quicklink=true";
                    graphicsOutput = "https://www.amazon.com/XFX-Speedster-Radeon-Graphics-RX-66XL8LFDQ/dp/B09HHLX543/ref=sr_1_4?crid=AP9WFPODMHOE&keywords=graphics%2Bcard&qid=1682590045&refinements=p_36%3A20000-25000&rnid=386442011&s=electronics&sprefix=graphics%2Bcard%2Celectronics%2C191&sr=1-4&th=1";
                }
            }
        }

    if(buyOptions == "Build" && computerOptions == "Desktop")
    {
        document.getElementById("output").innerHTML = "Here are the individual parts you will need to build your new PC! Click on the links below to view the parts." + "<br><br>";
        document.getElementById("output2").innerHTML = '<ol><li><a target="_blank" href="' + motherboardOutput + '">Motherboard</a></li><li><a target="_blank" href="' + powerOutput + '">Power Supply</a></li><li><a target="_blank" href="' + hdOutput + '">Hard Drive</a></li><li><a target="_blank" href="' + ramOutput + '">RAM</a></li><li><a target="_blank" href="' + cpuOutput + '">CPU</a></li><li><a target="_blank" href="' + coolerOutput + '">CPU Cooler</a></li><li><a target="_blank" href="' + caseOutput + '">Desktop Case</a></li><li><a target="_blank" href="' + fanOutput + '">Case Fans</a></li><li><a target="_blank" href="' + graphicsOutput + '">Graphics Card</a></li></ol>';
        
        document.getElementById("output").style.visibility = 'visible';
        document.getElementById("output").style.display = 'block';
    
        document.getElementById("output2").style.visibility = 'visible';
        document.getElementById("output2").style.display = 'block';
        
        return;
    }
    else
    {
        document.getElementById("output").innerHTML = outputDescription + "<br><br><br><br>";
    }
    document.getElementById("output").innerHTML = outputDescription + "<br><br><br><br>";


    document.getElementById("output2").innerHTML = "Click on the image below to check out the item.";
    document.getElementById("image_link").setAttribute('href',outputLink);
    document.getElementById("image_output").setAttribute('src',"../pictures/" + outputImage);

    document.getElementById("output").style.visibility = 'visible';
    document.getElementById("output").style.display = 'block';

    document.getElementById("output2").style.visibility = 'visible';
    document.getElementById("output2").style.display = 'block';

    document.getElementById("image_output").style.visibility = 'visible';
    document.getElementById("image_output").style.display = 'block';

    buyOptions = "";
    priceOptions = "";
    computerOptions = "";
    osOptions = "";
    otherOptions = "";
    outputLink = "";
    outputDescription = "";
    }

    function Reset()
    {
        document.getElementById("image_output").style.visibility = 'hidden';
        document.getElementById("image_output").style.display = 'none';

        document.getElementById("output").style.visibility = 'hidden';
        document.getElementById("output").style.display = 'none';
    
        document.getElementById("output2").style.visibility = 'hidden';
        document.getElementById("output2").style.display = 'none';

        document.getElementById("output").innerHTML = "";

        buyOptions = "";
        priceOptions = "";
        computerOptions = "";
        osOptions = "";
        otherOptions = "";
        useOptions = "";
        qualityOptions = "";
        storageOptions = "";
        outputLink = "";
        outputDescription = "";  


        document.getElementById("form_desktop").checked = false;
        document.getElementById("form_laptop").checked = false;

        document.getElementById("form_buy").checked = false;
        document.getElementById("form_build").checked = false;

        document.getElementById("form_price").checked = false;
        document.getElementById("form_performance").checked = false;

        document.getElementById("form_macos").checked = false;
        document.getElementById("form_windows").checked = false;

        document.getElementById("form_750").checked = false;
        document.getElementById("form_1000").checked = false;
        document.getElementById("form_1500").checked = false;

        document.getElementById("form_simple").checked = false;
        document.getElementById("form_gaming").checked = false;

        document.getElementById("form_small").checked = false;
        document.getElementById("form_medium").checked = false;
        document.getElementById("form_large").checked = false;

        document.getElementById("form_price2").checked = false;
        document.getElementById("form_performance2").checked = false;

        let i = 0;

        while(i < buyClass.length)
        {
            buyClass[i].style.visibility = 'hidden';
            buyClass[i].style.display = 'none'; 
            i++;
        }
        i = 0;
        while(i < otherClass.length)
        {
            otherClass[i].style.visibility = 'hidden';
            otherClass[i].style.display = 'none'; 
            i++;
        }
        i = 0;
        while(i < buildClass.length)
        {
            buildClass[i].style.visibility = 'hidden';
            buildClass[i].style.display = 'none'; 
            i++;
        }

        document.getElementById("form_laptop").disabled = false;
        document.getElementById("form_desktop").disabled = false;

        document.getElementById("form_buy").disabled = false;
        document.getElementById("form_build").disabled = false;

    }

    function ShowMore()
    {
        let i = 0;
        if(document.getElementById("form_laptop").checked)
        {
            while(i < buyClass.length)
            {
                buyClass[i].style.visibility = 'hidden';
                buyClass[i].style.display = 'none'; 
                i++;
            }

            i = 0;
            while(i < otherClass.length)
            {
                otherClass[i].style.visibility = 'visible';
                otherClass[i].style.display = 'block'; 
                i++;
            }
            i=0;
            while(i < buildClass.length)
            {
                buildClass[i].style.visibility = 'hidden';
                buildClass[i].style.display = 'none'; 
                i++;
            }
            document.getElementById("form_laptop").disabled = true;
            document.getElementById("form_desktop").disabled = true;

            document.getElementById("form_price").checked = false;
            document.getElementById("form_performance").checked = false;

            document.getElementById("form_macos").checked = false;
            document.getElementById("form_windows").checked = false;

            document.getElementById("form_750").checked = false;
            document.getElementById("form_1000").checked = false;
            document.getElementById("form_1500").checked = false;
        }
        else if(document.getElementById("form_desktop").checked)
        {
            while(i < buyClass.length)
            {
                buyClass[i].style.visibility = 'visible';
                buyClass[i].style.display = 'block'; 
                i++;
            }

            i = 0;
            while(i < otherClass.length)
            {
                otherClass[i].style.visibility = 'hidden';
                otherClass[i].style.display = 'none';  
                i++;
            }
            i = 0;
            while(i < buildClass.length)
            {
                buildClass[i].style.visibility = 'hidden';
                buildClass[i].style.display = 'none'; 
                i++;
            }

            document.getElementById("form_desktop").disabled = true;
            document.getElementById("form_laptop").disabled = true;

            document.getElementById("form_buy").disabled = false;
            document.getElementById("form_build").disabled = false;

            document.getElementById("form_buy").checked = false;
            document.getElementById("form_build").checked = false;

            document.getElementById("form_price").checked = false;
            document.getElementById("form_performance").checked = false;

            document.getElementById("form_macos").checked = false;
            document.getElementById("form_windows").checked = false;

            document.getElementById("form_750").checked = false;
            document.getElementById("form_1000").checked = false;
            document.getElementById("form_1500").checked = false;

            document.getElementById("form_simple").checked = false;
            document.getElementById("form_gaming").checked = false;

            document.getElementById("form_small").checked = false;
            document.getElementById("form_medium").checked = false;
            document.getElementById("form_large").checked = false;

            document.getElementById("form_price2").checked = false;
            document.getElementById("form_performance2").checked = false;
        }
    }

    function ShowMore2()
    {
        let i = 0;
        if(document.getElementById("form_buy").checked)
        {
            while(i < otherClass.length)
            {
                otherClass[i].style.visibility = 'visible';
                otherClass[i].style.display = 'block'; 
                i++;
            }
            i = 0;
            while(i < buildClass.length)
            {
                buildClass[i].style.visibility = 'hidden';
                buildClass[i].style.display = 'none'; 
                i++;
            }
            document.getElementById("form_buy").disabled = true;
            document.getElementById("form_build").disabled = true;

            document.getElementById("form_price").checked = false;
            document.getElementById("form_performance").checked = false;

            document.getElementById("form_macos").checked = false;
            document.getElementById("form_windows").checked = false;

            document.getElementById("form_750").checked = false;
            document.getElementById("form_1000").checked = false;
            document.getElementById("form_1500").checked = false;
        }
        else if(document.getElementById("form_build").checked)
        {
            while(i < otherClass.length)
            {
                otherClass[i].style.visibility = 'hidden';
                otherClass[i].style.display = 'none'; 
                i++;
            }
            i = 0;
            while(i < buildClass.length)
            {
                buildClass[i].style.visibility = 'visible';
                buildClass[i].style.display = 'block'; 
                i++;
            }
            
            document.getElementById("form_buy").disabled = true;
            document.getElementById("form_build").disabled = true;

            document.getElementById("form_simple").checked = false;
            document.getElementById("form_gaming").checked = false;

            document.getElementById("form_small").checked = false;
            document.getElementById("form_medium").checked = false;
            document.getElementById("form_large").checked = false;

            document.getElementById("form_price2").checked = false;
            document.getElementById("form_performance2").checked = false;
        }
    }
