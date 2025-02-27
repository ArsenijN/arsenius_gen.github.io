/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');
  document.addEventListener('mousemove', (e) => {
    tooltip.textContent = 'Mouse position: ' + e.clientX + ', ' + e.clientY;
    tooltip.style.display = 'block';
    tooltip.style.top = (e.clientY + 10) + 'px';
    tooltip.style.left = (e.clientX + 10) + 'px';
  });

  // Load images and metadata from server
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken}<br>
          <strong>Camera Model:</strong> ${item.cameraModel}<br>
          <strong>Description:</strong> ${item.description}
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          tooltip.style.display = 'block';
          tooltip.style.top = (e.clientY + 10) + 'px';
          tooltip.style.left = (e.clientX + 10) + 'px';
        });

        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');
  document.addEventListener('mousemove', (e) => {
    tooltip.textContent = 'Mouse position: ' + e.clientX + ', ' + e.clientY;
    tooltip.style.display = 'block';
    tooltip.style.top = (e.clientY + 10) + 'px';
    tooltip.style.left = (e.clientX + 10) + 'px';
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken}<br>
          <strong>Camera Model:</strong> ${item.cameraModel}<br>
          <strong>Description:</strong> ${item.description}
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          tooltip.style.display = 'block';
          tooltip.style.top = (e.clientY + 10) + 'px';
          tooltip.style.left = (e.clientX + 10) + 'px';
        });

        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');
  document.addEventListener('mousemove', (e) => {
    //tooltip.textContent = 'Mouse position: ' + e.clientX + ', ' + e.clientY;

    const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken}<br>
          <strong>Camera Model:</strong> ${item.cameraModel}<br>
          <strong>Description:</strong> ${item.description}
        `;

    tooltip.style.display = 'block';
    tooltip.style.top = (e.clientY + 10) + 'px';
    tooltip.style.left = (e.clientX + 10) + 'px';
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata


        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken}<br>
          <strong>Camera Model:</strong> ${item.cameraModel}<br>
          <strong>Description:</strong> ${item.description}
        `;
        console.log('Tooltip content:', tooltipContent); // Log tooltip content

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          tooltip.style.display = 'block';
          tooltip.style.top = (e.clientY + 10) + 'px';
          tooltip.style.left = (e.clientX + 10) + 'px';
        });

        img.addEventListener('mousemove', (e) => {
            tooltip.innerHTML = tooltipContent;
            tooltip.style.display = 'block';
            tooltip.style.top = (e.clientY + 10) + 'px';
            tooltip.style.left = (e.clientX + 10) + 'px';
        });


        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');
  const gallery = document.querySelector('.gallery');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.display = 'block';
    tooltip.style.top = (e.clientY + 10) + 'px';
    tooltip.style.left = (e.clientX + 10) + 'px';
  }

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken}<br>
          <strong>Camera Model:</strong> ${item.cameraModel}<br>
          <strong>Description:</strong> ${item.description}
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          updateTooltipPosition(e);
        });

        img.addEventListener('mousemove', (e) => {
          updateTooltipPosition(e);
        });

        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.display = 'block';
    tooltip.style.top = (e.pageY + 10) + 'px'; // Use pageY instead of clientY
    tooltip.style.left = (e.pageX + 10) + 'px'; // Use pageX instead of clientX
  }

  document.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data
      // You can handle the image creation and event listeners here
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.display = 'block';
    tooltip.style.top = (e.pageY + 10) + 'px'; // Use pageY instead of clientY
    tooltip.style.left = (e.pageX + 10) + 'px'; // Use pageX instead of clientX
  }

  document.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
          <strong>Description:</strong> ${item.description || ''}
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          updateTooltipPosition(e);
        });

        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.display = 'block';
    tooltip.style.top = (e.pageY + 10) + 'px'; // Use pageY instead of clientY
    tooltip.style.left = (e.pageX + 10) + 'px'; // Use pageX instead of clientX
  }

  document.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
          <strong>Description:</strong> ${item.description || ''}
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          updateTooltipPosition(e);
        });

        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');
  const gallery = document.querySelector('.gallery');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.display = 'block';
    tooltip.style.top = (e.clientY + 10) + 'px';
    tooltip.style.left = (e.clientX + 10) + 'px';
  }

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken}<br>
          <strong>Camera Model:</strong> ${item.cameraModel}<br>
          <strong>Description:</strong> ${item.description}
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          updateTooltipPosition(e);
        });

        img.addEventListener('mousemove', (e) => {
          updateTooltipPosition(e);
        });

        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.display = 'block';
    tooltip.style.top = (e.clientY + window.scrollY + 10) + 'px'; // Adjusted for scroll position
    tooltip.style.left = (e.clientX + window.scrollX + 10) + 'px'; // Adjusted for scroll position
  }




  document.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
          <strong>Description:</strong> ${item.description || ''}
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          updateTooltipPosition(e);
        });
/*
        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });
*//*
        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// Function to update tooltip position
function updateTooltipPosition(e) {
  tooltip.style.display = 'block';
  tooltip.style.top = (e.clientY + window.scrollY + 10) + 'px'; // Adjusted for scroll position
  tooltip.style.left = (e.clientX + window.scrollX + 10) + 'px'; // Adjusted for scroll position
}

document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');

  document.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
          <strong>Description:</strong> ${item.description || ''}
        `;

        // Create popup content from metadata
        const popupContent = `
          <div class="popup-content">
            <strong>Title:</strong> ${item.title}<br>
            <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
            <strong>Description:</strong> ${item.description || ''}
          </div>
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = popupContent; // Show popup content
          updateTooltipPosition(e); // Position popup near cursor
        });

        img.addEventListener('mouseout', () => {
          tooltip.innerHTML = ''; // Clear tooltip content
          tooltip.style.display = 'none'; // Hide tooltip
        });

        img.addEventListener('mousemove', (e) => {
          updateTooltipPosition(e); // Keep popup near cursor while moving over the image
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.top = (e.clientY + window.scrollY + 10) + 'px'; // Adjusted for scroll position
    tooltip.style.left = (e.clientX + window.scrollX + 10) + 'px'; // Adjusted for scroll position
  }

  document.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create popup content from metadata
        const popupContent = `
          <div class="popup-content">
            <strong>Title:</strong> ${item.title}<br>
            <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
            <strong>Description:</strong> ${item.description || ''}
          </div>
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = popupContent; // Show popup content
          tooltip.style.display = 'block'; // Show tooltip
        });

        img.addEventListener('mouseout', () => {
          tooltip.innerHTML = ''; // Clear tooltip content
          tooltip.style.display = 'none'; // Hide tooltip
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
document.addEventListener('DOMContentLoaded', function() {
  const infobox = document.createElement('div'); // Create infobox element
  infobox.classList.add('infobox'); // Add class for styling
  document.body.appendChild(infobox); // Append infobox to the body

  document.addEventListener('mousemove', (e) => {
    // Position infobox near cursor
    infobox.style.top = (e.clientY + window.scrollY + 10) + 'px';
    infobox.style.left = (e.clientX + window.scrollX + 10) + 'px';
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
          <strong>Description:</strong> ${item.description || ''}
        `;

        img.addEventListener('mouseover', (e) => {
          // Show infobox near cursor
          infobox.innerHTML = tooltipContent;
          infobox.style.display = 'block';
        });

        img.addEventListener('mouseout', () => {
          // Hide infobox when leaving the image
          infobox.style.display = 'none';
        });

        img.addEventListener('mousemove', (e) => {
          // Keep infobox near cursor while moving over the image
          infobox.style.top = (e.clientY + window.scrollY + 10) + 'px';
          infobox.style.left = (e.clientX + window.scrollX + 10) + 'px';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
/*
// JavaScript for tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.display = 'block';
    tooltip.style.top = (e.pageY + 10) + 'px'; // Use pageY instead of clientY
    tooltip.style.left = (e.pageX + 10) + 'px'; // Use pageX instead of clientX
  }

  document.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
          <strong>Camera Model:</strong> ${item.cameraModel || ''}<br>
          <strong>Description:</strong> ${item.description || ''}
        `;

        img.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          updateTooltipPosition(e);
        });

        img.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
*/
document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.querySelector('.tooltip');

  // Function to update tooltip position
  function updateTooltipPosition(e) {
    tooltip.style.display = 'block';
    tooltip.style.top = (e.pageY + 10) + 'px'; // Use pageY instead of clientY
    tooltip.style.left = (e.pageX + 10) + 'px'; // Use pageX instead of clientX
  }

  document.addEventListener('mousemove', (e) => {
    updateTooltipPosition(e);
  });

  // Load metadata from metadata.json
  fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched JSON data:', data); // Log fetched JSON data

      const gallery = document.querySelector('.gallery');
      data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'res/img/' + item.src;
        img.alt = item.title;
        img.title = item.title;

        // Wrap the image within an anchor tag
        const anchor = document.createElement('a');
        anchor.href = img.src;
        anchor.appendChild(img);

        // Create tooltip content from metadata
        const tooltipContent = `
          <strong>Title:</strong> ${item.title}<br>
          <strong>Date Taken:</strong> ${item.dateTaken || ''}<br>
          <strong>Camera Model:</strong> ${item.cameraModel || ''}<br>
          <strong>Description:</strong> ${item.description || ''}
        `;

        anchor.addEventListener('mouseover', (e) => {
          tooltip.innerHTML = tooltipContent;
          updateTooltipPosition(e);
        });

        anchor.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });

        gallery.appendChild(anchor);
      });
    })
    .catch(error => console.error('Error fetching metadata:', error));
});
