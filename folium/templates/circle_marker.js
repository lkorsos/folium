var {{ circle }} = L.circle([{{ lat }}, {{ lon }}], {{ radius }}, {
                            color: '{{ line_color }}',
                            opacity: {{ line_opacity }},
                            fillColor: '{{ fill_color }}',
                            fillOpacity: {{ fill_opacity }}
                            });